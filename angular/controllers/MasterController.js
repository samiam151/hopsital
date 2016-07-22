app.controller('MasterController', ['PatientService', '$scope', '$log', '$http', function(PatientService, $scope, $log, $http){    

    $scope.patient = null;
    $scope.setPatient = function(patient){
        $http({
            method: 'GET',
            url: 'data/' + patient + '.json'
        }).success(function(data, status, headers, config){
            $scope.patient = data;
        }).error(function(data, status, headers, config){
            $log.warn(data, status, headers, config);
        });
    };
}]);