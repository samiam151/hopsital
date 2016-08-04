var app = angular.module('app', ['ngRoute']);

// ROUTING SECTION
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
        .when('/videos', {
            templateUrl: 'templates/videos.html'
        })
        .otherwise({
            redirectTo: '/',
            templateUrl: 'templates/home.html'
        });
});

// SET UP $SCE WHITELIST FOR SAFE URL'S
app.config(function($sceDelegateProvider) {
   $sceDelegateProvider.resourceUrlWhitelist([
     'self',
     '*://www.youtube.com/**'
   ]);
});;