app.controller('GreetingController', ['DateService', '$interval', '$scope', function(DateService, $interval, $scope){
    $scope.date = DateService.date;
    $scope.time = Date.now();

    $scope.counter = 0;

    var incrementTime = function(){
        var LATENCY_ADJUSTMENT = 500; // milliseconds
        $scope.time = Date.now() + LATENCY_ADJUSTMENT;
    };

    $interval(incrementTime, 1000);

}]);