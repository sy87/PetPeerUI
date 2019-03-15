'use strict';

angular.module('myApp.addpets', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addpets', {
    templateUrl: 'addpets/addpets.html',
    controller: 'AddPetsCtrl'
  });
}])

.controller('AddPetsCtrl', (function($scope, $http) {

  $scope.pet ={
    name: '',
    age: '',
    place:''
  }

  $scope.addPets = function() {
    // alert(JSON.stringify($scope.pet));

    var req = {
      method: 'POST',
      url: APP_BASE_URL + '/pets/addPet',
      data: $scope.pet
    }
     
    //  $http(req).then(function(){...}, function(){...});

    $http(req).then(function(response) {
      console.log(response);
    });
    
  };

}));