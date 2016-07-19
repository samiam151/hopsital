app.service('DateService', ['$interval', function($interval){
    this.date = Date.now();
}]);