app.factory('VideoService', ['$http', function($http){
    return {
        getVideos: function(illness){
            var illness_clean = illness.toLowerCase().replace(/\s/g, '_');
            return $http.get('data/illness/' +  illness_clean + '.json');
        }
    }
}]);