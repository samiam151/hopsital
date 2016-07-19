app.service('PatientService', function($http, $log){
    this.getPatient = function(patient){
        $http({
            method: 'GET',
            url: 'data/' + patient + '.json'
        }).success(function(data, status, headers, config){
            $log.log(data);
            return data;
        }).error(function(data, status, headers, config){
            $log.warn(data, status, headers, config);
        });
    };

    this.alertPatient = function(patient){
        alert(patient);
    };
});