app.factory('PatientService', function($http, $log){
    return {
        getPatient: function(patient){
            return $http.get('data/patients/' + patient + '.json');
        }
    }
});