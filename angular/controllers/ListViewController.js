app.controller('ListViewController', ['DirectionsService', function(DirectionsService){
    this.directions = DirectionsService.allDirections;
    this.tops = DirectionsService.topDirections;
    this.bottoms = DirectionsService.bottomDirections;
}]);