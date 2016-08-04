app.directive('youtube', ['$sce', function($sce){
    return {
        restrict: 'E',
        scope: {
            url: '@',
            title: '@'
        },
        template: `
            <div class="videoDiv col-md-3 text-center">
                <iframe width="100%" src="{{url}}" frameborder="1" allowfullscreen></iframe>
                <p ng-bind='title'>/p>
            </div>`
    };
}]);