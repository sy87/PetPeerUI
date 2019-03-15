'use strict';

// var petData = [
//     {
//         name: "Jicko",
//         place: "CH",
//         age: "4",
//         action: "Sold"
//     },
//     {
//         name: "Lola",
//         place: "DL",
//         age: "2",
//         action: "Sold"
//     },
//     {
//         name: "Chacko",
//         place: "BL",
//         age: "3",
//         action: "Buy"
//     },
//     {
//         name: "Pinto",
//         place: "HY",
//         age: "2",
//         action: "Sold"
//     },
//     {
//         name: "Mony",
//         place: "CH",
//         age: "1",
//         action: "Sold"
//     }
// ];

angular.module('myApp.petslist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/petslist', {
    templateUrl: 'petslist/petslist.html',
    controller: 'PetsListCtrl'
  });
}])

.controller('PetsListCtrl', function($scope, $location, $http) {

    // PetsService.get({}, function(data) {
    //     console.log("Data is :" + data);
    // });

    $http.get(APP_BASE_URL + "/pets")
    .then(function(response) {
        $scope.petsList = response.data;
    });

    // $resource(APP_BASE_URL + "/pets", {}, {
    //     query: {
    //         method: 'GET',
    //         params: {phoneId: 'phones'},
    //         isArray: true
    //     }
    // });

    // $scope.petsList = petData;

    $scope.buyClicked = function() {
        // console.log("clicked");
        $location.path('/login.html');
    };
});