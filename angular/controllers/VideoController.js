app.controller('VideoController', ['VideoService', '$scope', '$sce', function(VideoService, $scope, $sce){
    $scope.getVideos = function(illness){
        VideoService.getVideos(illness).then(function(res){

            $scope.videos = res.data.videos;
            
            $scope.videos.forEach(function(element) {
                console.log(element.url);
            });
        });
    }  
}]);