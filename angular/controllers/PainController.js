app.controller('PainController', ['$scope', function($scope){
    
    $scope.setLevel = function(givenPainLevel){
        $scope.level = givenPainLevel;
    }

}]);