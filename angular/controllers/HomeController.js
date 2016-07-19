app.controller('HomeController', ['DirectionsService', function(DirectionsService){
    this.tops = DirectionsService.topDirections;
    this.bottoms = DirectionsService.bottomDirections;
}]);