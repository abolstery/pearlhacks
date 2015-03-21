var app = angular.module('pearlhacks', ['ngRoute']);

app.controller('mainCtrl', function ($scope, $location) {
	$scope.isActive = function(route) {
		console.log(route === $location.path());
        return route === $location.path();
    }
});

app.controller('expCtrl', function ($scope) {

});

app.controller('infoCtrl', function ($scope) {

});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.html',
        controller: 'mainCtrl'
      }).
      when('/experience', {
      	templateUrl: 'partials/exp.html',
      	controller:'expCtrl'
      }).
      when('/info', {
      	templateUrl: 'partials/info.html',
      	controller:'infoCtrl'
      }).
      when('/gethelp', {
      	templateUrl: 'partials/help.html'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);

