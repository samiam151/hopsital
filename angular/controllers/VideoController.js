app.controller('VideoController', ['VideoService', '$scope', function(VideoService, $scope){
    $scope.getVideos = function(illness){
        VideoService.getVideos(illness).then(function(res){
            $scope.videos = res.data.videos;
        });
    }
    
    
    
    
    
    
}]);