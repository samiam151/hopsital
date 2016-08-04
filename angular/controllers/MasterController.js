app.controller('MasterController', ['PatientService', '$scope',function(PatientService, $scope){
    $scope.setPatient = function(patient){
        PatientService.getPatient(patient).then(function(Data){
            $scope.patient = Data.data;
        });
    }
}]);