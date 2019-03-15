'use strict';

angular.module('myApp.petslist')
.factory('PetsService', ['$resource',
    function ($resource) {
        return $resource(APP_BASE_URL + "/pets", {}, {
            query: { method: "GET", isArray: true },
            create: { method: "POST"},
            get: { method: "GET"},
            remove: { method: "DELETE"},
            update: { method: "PUT"}
        });
}]);