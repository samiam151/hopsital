app.factory('VideoService', ['$http', function($http){
    return {
        getVideos: function(illness){
            var illness_lowercase = illness.toLowerCase();
            var illness_clean = illness_lowercase.replace(/\s/g, '_');

            return $http.get('data/illness/' +  illness_clean + '.json');
        }
    }
}]);