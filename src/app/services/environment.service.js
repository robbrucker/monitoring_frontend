var app = angular.module("environment.service", []);
app.factory('environmentService', function() {
    var product = {
        getEnvironment: function() {
            var url = window.location.href;
            if(_.includes(url, 'localhost')) {
                return "dev";
            }
            else {
                return "prod";
            }
        },
        getApiUrl: function() {
            if(this.getEnvironment() == "dev") {
                return "http://localhost:3000";
            }
            else {
                return "http://monitorapi.brucker.tech";
            }
        }


    };
    return product;
});