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