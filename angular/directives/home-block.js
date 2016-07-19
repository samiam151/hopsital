app.directive('homeBlock', function(){
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/home-blocks.html'
    }
});