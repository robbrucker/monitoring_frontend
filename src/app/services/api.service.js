var app = angular.module("api.service", []);
app.factory('apiService', function($q, $http, $window, sessionService, environmentService, moment) {
    var product = {
        getApi: function() {

        },
        userLoggedIn: function() {
            return sessionService.getToken() && sessionService.getUserId();
        },
        logInUser: function(user) {
            //todo: Create environment service to not use localhost..
            $http.defaults.headers.post["Content-Type"] = "application/json";
            return $http.post(environmentService.getApiUrl()+'/login', user).then(function(response) {
                if(response.data.token) {
                    $window.localStorage.setItem("apiKey", response.data.token);
                    $window.localStorage.setItem("userId", response.data.id);
                    return response.data;
                }
            }, function(err) {
                console.log("Err is ", err);
                return {error: true, status: err.status};
            });
        },
        submitCategory: function(category) {
            category.user_id = $window.localStorage.getItem("userId");
            var catObj = {};
            catObj.category = category;
            return $http.post(environmentService.getApiUrl()+'/categories', catObj).then(function(response) {
               return response.status === 401 ? false : response;
            });
        },
        getCategory: function(category) {

            var userId = sessionService.getUserId();
            if(userId) {
                return $http.get(environmentService.getApiUrl()+'/categories?user_id='+userId).then(function(response) {
                   return response.data;
                });
            }
            else {
                return null;
            }

        },
        removeCategory: function(id) {
            return $http["delete"](environmentService.getApiUrl()+'/categories/'+id).then(function(response) {
                return response.data;
            });
        },

        startTracking: function(id) {
            var obj = {};
            obj.category_record = {};
            obj.category_record.user_id = sessionService.getUserId();
            obj.category_record.category_id = id;
            obj.category_record.start_time =moment.utc(moment(new Date())).format('HH:mm:ss');
            return $http.post(environmentService.getApiUrl()+'/category_records', obj).then(function (response) {
                return response.data;
            });
        },
        stopTracking: function(id, startTime) {
            var obj = {};
            obj.category_record = {};
            obj.category_record.user_id = sessionService.getUserId();
            obj.category_record.id = id;
            obj.category_record.start_time = startTime;
            obj.category_record.end_time = moment.utc(moment(new Date())).format('HH:mm:ss');
            return $http.put(environmentService.getApiUrl()+'/category_records/'+id, obj).then(function(response) {
                return response.data;
            });
        },
        removeEntry: function(id) {
            return $http["delete"](environmentService.getApiUrl()+'/category_records/'+id).then(function(response) {
                return response;
            });
        },
        getCategoryRecords: function(id) {
            var userId = sessionService.getUserId();
            return $http.get(environmentService.getApiUrl()+'/category_records/?category_id='+id+'&user_id='+userId).then(function(response) {
                return response.data;
            });
        },
        editCategoryRecords: function(value) {
            return $http.put(environmentService.getApiUrl()+'/category_records/'+value.id, value).then(function(response) {
                return response.data;
            });
        },
        getLastRecords: function() {
            var userId = sessionService.getUserId();
            return $http.get(environmentService.getApiUrl()+'/last_details/'+userId).then(function(response) {
                console.log("Last details ", response);
                return response.data;
            });
        },
        createUser: function(user) {
            var u = {};
            u.user = user;
            return $http.post(environmentService.getApiUrl()+'/users', u).then(function(response) {
                return response.data;
            });
        },
        getTodaysRecords: function(id) {
            var userId = sessionService.getUserId();
            return $http.get(environmentService.getApiUrl()+'/todays_records/'+userId+'/'+id).then(function(response) {
                return response.data;
            });
        },
        addCategoryTag: function(val, categoryId) {
            if(val.tag) {
                val.tag =  null;
            }
            var userId = sessionService.getUserId();

            return $http.post(environmentService.getApiUrl()+'/tags', {name: val}).then(function(response) {
                if(response.data.id) {
                    var send_obj = {};
                    send_obj.category_tag = {category_id: categoryId, tag_id: parseInt(response.data.id, 10), user_id: parseInt(userId, 10)};
                    return $http.post(environmentService.getApiUrl()+'/category_tags', send_obj).then(function() {
                        return true;
                    });
                }
                else {
                    return false;
                }

            });
        },
        getTags: function(categoryId) {
            var userId = sessionService.getUserId();
            return $http.get(environmentService.getApiUrl()+'/category_tags/?user_id='+userId+'&category_id='+categoryId).then(function(response) {
                return response.data;
            });
        },
        getTagFuzzySearch: function(categoryId, fuzzyText) {
            var userId = sessionService.getUserId();
            return $http.get(environmentService.getApiUrl()+'/category_tags/?user_id='+userId+'&category_id='+categoryId+'&fuzzy='+fuzzyText).then(function(response) {
                return response.data;
            });
        }

    };
    return product;
});