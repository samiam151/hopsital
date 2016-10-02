var app = angular.module('app', ['ngRoute']);

// ROUTING SECTION
app.config(function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'templates/home.html'
        })
        .when('/to-do', {
            templateUrl: 'templates/to-do.html'
        })
        .when('/list', {
            templateUrl: 'templates/list.html'
        })
        .when('/medications', {
            templateUrl: 'templates/medications.html'
        })
        .when('/pain', {
            templateUrl: 'templates/pain.html'
        })
        .when('/videos', {
            templateUrl: 'templates/videos.html'
        })
        .otherwise({
            redirectTo: '/',
            templateUrl: 'templates/home.html'
        });
});

// SET UP $SCE WHITELIST FOR SAFE URL'S
app.config(function($sceDelegateProvider) {
   $sceDelegateProvider.resourceUrlWhitelist([
     'self',
     '*://www.youtube.com/**'
   ]);
});;
app.controller('GreetingController', ['DateService', '$interval', '$scope', function(DateService, $interval, $scope){
    $scope.date = DateService.date;
    $scope.time = Date.now();

    $scope.counter = 0;

    var incrementTime = function(){
        var LATENCY_ADJUSTMENT = 500; // milliseconds
        $scope.time = Date.now() + LATENCY_ADJUSTMENT;
    };

    $interval(incrementTime, 1000);

}]);
app.controller('HomeController', ['DirectionsService', function(DirectionsService){
    this.tops = DirectionsService.topDirections;
    this.bottoms = DirectionsService.bottomDirections;
}]);

app.controller('ListViewController', ['DirectionsService', function(DirectionsService){
    this.directions = DirectionsService.allDirections;
    this.tops = DirectionsService.topDirections;
    this.bottoms = DirectionsService.bottomDirections;
}]);
app.controller('MasterController', ['PatientService', '$scope', '$rootScope', '$route', function(PatientService, $scope, $rootScope, $route){
    $scope.setPatient = function(patient){
        PatientService.getPatient(patient).then(function(Data){
            $scope.patient = Data.data;
            $rootScope.patient = Data.data;
            $rootScope.$broadcast('patient_update', {
                patient: $scope.patient
            });
        });
    }

    $scope.$on('$viewContentLoaded', function(){
        if($route.current.templateUrl === 'templates/videos.html'){
            $rootScope.$broadcast('videosViewLoaded', {});
        }
    });
}]);
app.controller('MedicationsController', ['PatientService','$scope', '$log', function(PatientService, $scope, $log){
    $scope.medInfo = null;
    $scope.medInfoHeader = null;
    $scope.showInfo = function(medication, tradename){
        $.ajax({
            type: "GET",
            url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + medication + "&callback=?",
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
            
                var markup = data.parse.text["*"];
                var i = $('<div></div>').html(markup);
                
                // remove links as they will not work
                i.find('a').each(function(){
                    $(this).replaceWith($(this).html()); 
                });
                
                // remove bolds
                i.find('b').each(function(){
                    $(this).replaceWith($(this).html());
                });

                // remove any references
                i.find('sup').remove();
                
                // remove cite error
                i.find('.mw-ext-cite-error').remove();
                
                var msg = $(i).find('p').html();

                $scope.medInfo = msg;
                // $scope.medInfoHeader = data.parse.title;

                if (tradename !== medication){
                    $scope.medInfoHeader = tradename + ' (' + medication + ')';
                } else {
                    $scope.medInfoHeader = tradename;
                }
                
                
            },
            error: function (error) {
                $log.log(error);
            }
        });    
    };
}]);


app.controller('PainController', ['$scope', function($scope){
    
    $scope.setLevel = function(givenPainLevel){
        $scope.level = givenPainLevel;
    }

}]);
app.controller('PatientController', ['PatientService', function(PatientService){
    this.getPatient = PatientService.getPatient(patient);
}]);
app.controller('ToDoController', ['$scope', function($scope){
    $scope.addItem = function(item){
        $scope.$parent.patient.todos.push(item);
        $scope.new_item = '';
    }

    $scope.removeItem = function(item){
        var patient = $scope.$parent.patient,
            indexOfSelectedItem = patient.todos.indexOf(item);
        patient.todos.splice(indexOfSelectedItem, 1);
    };
}])
app.controller('VideoController', ['VideoService', '$scope', '$rootScope', function(VideoService, $scope, $rootScope){

    var toFileName = VideoService.toFileName;
    function getVideos(illness){
        VideoService.getVideos(illness).then(function(res){
            $scope.videos = res.data.videos;
        });
    };

    $scope.$on('videosViewLoaded', function(){
        if($rootScope.patient){
            var illness = toFileName($rootScope.patient.illness);
            $scope.videos = getVideos(illness);
        }
    });

    $scope.$on('patient_update', function(e, args){
        var illness = toFileName(args.patient.illness);
        $scope.videos = getVideos(illness);
    });
}]);
app.directive('homeBlock', function(){
    return {
        restrict: 'E',
        scope: {},
        transclude: {
            'blockimage': 'img'
        },
        // templateUrl: 'templates/home-blocks.html'
        template: `
            <div class="home-block-div">
                <div class="home-block-img">
                    <span ng-transclude='blockimage'></span>
                </div>
                <div class="home-block-content">
                    
                </div>
            </div>
        `
    }
});
app.directive('youtube', ['$sce', function($sce){
    return {
        restrict: 'E',
        scope: {
            url: '@',
            title: '@'
        },
        template: `
            <div class="videoDiv col-md-3 text-center">
                <iframe width="100%" src="{{url}}" frameborder="1" allowfullscreen></iframe>
                <p ng-bind='title'>/p>
            </div>`
    };
}]);
app.filter('trustUrl', ['$sce', function($sce){
    return function(url){
        return $sce.trustAsResourceUrl(url);
    };
}]);
app.service('DateService', ['$interval', function($interval){
    this.date = Date.now();
}]);
app.service('DirectionsService', function(){
    this.topDirections = [
        {
            item: 'Learn about my medicines',
            url: '#/medications',
            bg_img: 'static/img/medications.jpeg'
        },
         {
            item: 'Watch videos picked just for me',
            url: '#/videos',
            bg_img: 'static/img/skeleton_muscle.jpg'
        }, {
            item: 'Rate my pain',
            url: '#/pain',
            bg_img: 'static/img/cactus.jpeg'
        }
    ];

    this.bottomDirections = [
        {
            item: 'See my medicines',
            color: '#E74C3C',
            glyph: 'leaf'
        },
        {
            item: 'Browse health videos',
            color: '#5499C7',
            glyph: 'film'
        },
        {
            item: 'Watch TV',
            color: '#F5B041',
            glyph: 'picture'
        },
        {
            item: 'Listen to Music',
            color: '#45B39D',
            glyph: 'music'
        },
        {
            item: 'Order a meal',
            color: '#34495E',
            glyph: 'cutlery'
        },
        {
            item: 'Share a compliment',
            color: '#AAB7B8',
            glyph: 'comment'
        }
    ];
});
app.factory('MedicationsService', ['$http', function($http){
    return {
        getInfo: function()
    }
}]);
app.factory('PatientService', function($http, $log){
    return {
        getPatient: function(patient){
            return $http.get('data/patients/' + patient + '.json');
        }
    }
});
app.factory('VideoService', ['$http', function($http){
    return {
        getVideos: function(illness){
            var illness_clean = illness.toLowerCase().replace(/\s/g, '_');
            return $http.get('data/illness/' +  illness_clean + '.json');
        },
        
        toFileName: function(fileName){
            if(typeof fileName === 'string'){
                return fileName.toLowerCase().replace(/\s/g, '_');
            } else {
                console.log('Enter a string');
            }   
        }
    }
}]);