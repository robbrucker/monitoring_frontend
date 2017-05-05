var app = angular.module("session.service", []);
app.factory('sessionService', function($q, $http, $window) {
    var product = {
        getToken: function() {
            return $window.localStorage.getItem("apiKey");
        },
        getUserId: function() {
            return $window.localStorage.getItem("userId");
        },
        logOutUser: function() {
            if($window.localStorage.getItem("userId")) {
                delete $window.localStorage.userId;
            }
        }

    };
    return product;
});