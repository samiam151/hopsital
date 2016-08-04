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