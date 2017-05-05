var app = angular.module("intecerceptor.service", []);
app.factory('httpRequestInterceptor', function ($window, $q, $rootScope) {
    return {
        request: function (config) {

            // use this to destroying other existing headers
            //config.headers = {'Authentication':'authentication'};
            //var token =
            // config.headers = {'Authentication':'Token token='+$window.localStorage.getItem("apiKey")};
            // config.headers = {'Content-Type':'application/json'};
            // use this to prevent destroying other existing headers
            config.headers['Authorization'] = 'Token token='+$window.localStorage.getItem("apiKey");

            return config;
        },
        response: function (response) {
            return response || $q.when(response);
        },
        responseError: function (response) {
            if (response.status === 401) {
                $rootScope.$broadcast('unauthorized');
            }
            return $q.reject(response);
        }
    };
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
});