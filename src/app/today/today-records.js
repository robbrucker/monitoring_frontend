
angular.module( 'ngBoilerplate.today-records', [
  'ui.router',
  'plusOne'
])

.config(function config( $stateProvider  ) {
  $stateProvider.state( 'todayRecords', {
    url: '/today-records',
    views: {
      "main": {
        controller: 'TodayRecordsCtrl',
        templateUrl: 'today/today-records.tpl.html'
      }
    },
    data:{ pageTitle: 'Todays Records' }
  });
})


.controller( 'TodayRecordsCtrl', function LastRecordsController( $scope, apiService, $rootScope, sessionService, $state, moment) {

  $scope.administrationMode = false;
  $scope.viewingRecords = false;
  $scope.editingStartVal = {};
  $scope.editingEndVal = {};
  //login
  $scope.isUserLoggedIn = function() {
    $scope.loggedIn = apiService.userLoggedIn() ? true : false;
    console.log("Is the user logged in? ", $scope.loggedIn);
  };
  $scope.isUserLoggedIn();

  $scope.createUser = function(user) {
    apiService.createUser(user).then(function() {
      $scope.wantsToSignUp = false;
    });
  };

  //for submitting login
  $scope.user = {};

  /**
   * Submit methods
   */
  $scope.submitLogin = function() {
    apiService.logInUser($scope.user).then(function(result) {
      $state.go($state.current, {}, {reload: true});
    });
  };
  if(!$scope.loggedIn) {
    return;
  }


  //for submitting categories
  $scope.category = {};

  apiService.getCategories().then(function(result) {
    $scope.categories = result;
    _.each($scope.categories, function(category) {
      apiService.getTodaysRecords(category.id).then(function(result) {
        category.today = result;
      });
    });
  });

  $scope.viewRecords = function(id, name) {
    $scope.viewingRecords = true;
    $scope.viewingRecord = {};
    $scope.viewingRecord.name = name;
    $scope.viewingRecord.id = id;
    apiService.getTodaysRecords(id).then(function(result) {
      //TODO: Implement something here
    });
  };

  $scope.toggleAdminMode = function() {
    $scope.administrationMode = !$scope.administrationMode;
  };

  $rootScope.$on('unauthorized',function(event){
    $scope.logOutUser();
  });

  $scope.logOutUser = function() {
    sessionService.logOutUser();
    $state.go($state.current, {}, {reload: true});
  };

})

;

