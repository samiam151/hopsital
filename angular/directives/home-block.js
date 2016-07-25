app.directive('homeBlock', function(){
    return {
        restrict: 'E',
        scope: {},
        transclude: {
            'blockimage': 'img'
        },
        // templateUrl: 'templates/home-blocks.html'
        template: `
            <div class="home-block-div">
                <div class="home-block-img">
                    <span ng-transclude='blockimage'></span>
                </div>
                <div class="home-block-content">
                    
                </div>
            </div>
        `
    }
});