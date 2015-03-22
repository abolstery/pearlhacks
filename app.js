var app = angular.module('pearlhacks', ['ngRoute']);

app.controller('mainCtrl', function ($scope, $location) {
	$scope.isActive = function(route) {
        return route === $location.path();
    };
});

app.controller('expCtrl', function ($scope, $timeout) {
	//space = 32 arm blue, up = 38 neck yellow, left = 37 back green, right = 39 hip black, down = 40 red crotch
	/*
		0: arm == 32
		1: hip == 39
		2: neck == 38
		3: back == 37
		4: crotch == 40

		1,2,3,5 -> no touch req
	*/
	$scope.code = -1;
	$scope.currImg = 0;
	$scope.instruction = "Touch your arm to begin";
	$scope.buttonBehavior = function(event) {
		$scope.code = event.which || event.keyCode;
		if($scope.currImg == 0 && $scope.code == 32) { //incr img
			$timeout(function(){
				$scope.currImg = 1;
				$scope.instruction = "The flashback is triggered with a touch";
			}, 1000);
			$timeout(function(){
				$scope.currImg = 2;
				$scope.instruction = "We begin with an innocent study session";
			}, 6000);
			$timeout(function(){
				$scope.currImg = 3;
				$scope.instruction = "As time passes, the conversation becomes more flirty";
			}, 11000);
			$timeout(function(){
				$scope.currImg = 4;
				$scope.instruction = "Now, we delve into the first contact. Touch your hip to continue.";
			}, 16000);
		} else if($scope.currImg == 4 && $scope.code == 39) { //incr img
			$timeout(function(){
				$scope.currImg = 5;
				$scope.instruction = "The touch was clearly unwanted";
			}, 1000);
			
			$timeout(function(){
				$scope.currImg = 6;
				$scope.instruction = "The scene turns violent. Touch your neck to continue.";
			}, 6000);
		} else if($scope.currImg == 6 && $scope.code == 38) { //incr img
			$timeout(function(){
				$scope.currImg = 7;
				$scope.instruction = "The violence escalates. Touch your back to continue.";
			}, 1000);
			
		} else if($scope.currImg == 7 && $scope.code == 37) { //incr img
			$timeout(function(){
				$scope.currImg = 8;
				$scope.instruction = "Touch your lower abdomen to continue.";
			}, 1000);
			
		} else if($scope.currImg == 8 && $scope.code == 40) { //incr img
			$timeout(function(){
				$scope.currImg = 0;
				$scope.instruction = "We return to the present. Touch your arm to restart the simulation.";
			}, 1000);
		}
	};
	$scope.closeModal = function() {
		$('#box').focus();
	}
	$('#instructions').modal('show')    
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

