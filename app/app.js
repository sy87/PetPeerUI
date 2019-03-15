'use strict';

// var APP_BASE_URL = "http://10.117.189.212:8080/PetStore"; // local

var APP_BASE_URL = "http://13.234.118.1:8080/PetStore";

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  // 'ngResource',
  'myApp.login',
  'myApp.registration',
  'myApp.addpets',
  'myApp.petslist'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.otherwise({redirectTo: '/login'});
}]);
