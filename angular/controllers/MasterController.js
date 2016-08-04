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