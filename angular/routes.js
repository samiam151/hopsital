var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'templates/home.html'
        })
        .when('/to-do', {
            templateUrl: 'templates/to-do.html'
        })
        .when('/list', {
            templateUrl: 'templates/list.html'
        })
        .when('/medications', {
            templateUrl: 'templates/medications.html'
        })
        .when('/pain', {
            templateUrl: 'templates/pain.html'
        })
        .otherwise({
            redirectTo: '/',
            templateUrl: 'templates/home.html'
        });
});