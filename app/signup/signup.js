'use strict';

angular.module('myApp.registration', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/registration', {
    templateUrl: 'signup/signup.html',
    controller: 'SignupCtrl'
  });
}])

.controller('SignupCtrl', [function() {

}]);