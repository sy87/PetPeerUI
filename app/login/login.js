'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', [function($scope, $http) {
        // var url = "/data.txt";

        // $http.get(url).then( function(response) {
        //    $scope.students = response.data;
        // });
}]);