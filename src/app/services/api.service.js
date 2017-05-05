var app = angular.module("api.service", []);
app.factory('apiService', function($q, $http, $window, sessionService) {
    var product = {
        getApi: function() {

        },
        userLoggedIn: function() {
            return sessionService.getToken() && sessionService.getUserId();
        },
        logInUser: function(user) {
            //todo: Create environment service to not use localhost..
            return $http.post('http://localhost:3000/login', user).then(function(response) {
                if(response.data.token) {
                    $window.localStorage.setItem("apiKey", response.data.token);
                    $window.localStorage.setItem("userId", response.data.id);
                    return response.data;
                }
            });
        },
        submitCategory: function(category) {
            category.user_id = $window.localStorage.getItem("userId");
            var catObj = {};
            catObj.category = category;
            return $http.post('http://localhost:3000/categories', catObj).then(function(response) {
               return response.status === 401 ? false : response;
            });
        },
        getCategory: function(category) {

            var userId = sessionService.getUserId();
            if(userId) {
                return $http.get('http://localhost:3000/categories?user_id='+userId).then(function(response) {
                   return response.data;
                });
            }
            else {
                return null;
            }

        },
        removeCategory: function(id) {
            return $http["delete"]('http://localhost:3000/categories/'+id).then(function(response) {
                return response.data;
            });
        },

        startTracking: function(id) {
            var obj = {};
            obj.category_record = {};
            obj.category_record.user_id = sessionService.getUserId();
            obj.category_record.category_id = id;
            obj.category_record.start_time =new Date().toISOString().slice(0, 19).replace('T', ' ');
            return $http.post('http://localhost:3000/category_records', obj).then(function (response) {
                return response.data;
            });
        },
        stopTracking: function(id) {
            var obj = {};
            obj.category_record = {};
            obj.category_record.user_id = sessionService.getUserId();
            obj.category_record.id = id;
            obj.category_record.end_time = new Date().toISOString().slice(0, 19).replace('T', ' ');
            return $http.put('http://localhost:3000/category_records/'+id, obj).then(function(response) {
                return response.data;
            });
        },
        removeEntry: function(id) {
            return $http["delete"]('http://localhost:3000/category_records/'+id).then(function(response) {
                return response;
            });
        },
        getCategoryRecords: function(id) {
            var userId = sessionService.getUserId();
            return $http.get('http://localhost:3000/category_records/?category_id='+id+'&user_id='+userId).then(function(response) {
                return response.data;
            });
        },
        getLastRecords: function() {
            var userId = sessionService.getUserId();
            return $http.get('http://localhost:3000/last_details/'+userId).then(function(response) {
                console.log("Last details ", response);
                return response.data;
            });
        },
        createUser: function(user) {
            var u = {};
            u.user = user;
            return $http.post('http://localhost:3000/users', u).then(function(response) {
                return response.data;
            });
        }

    };
    return product;
});