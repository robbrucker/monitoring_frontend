
angular.module( 'ngBoilerplate.start', [
  'ui.router',
  'plusOne'
])

.config(function config( $stateProvider  ) {
  $stateProvider.state( 'start', {
    url: '/start',
    views: {
      "main": {
        controller: 'StartCtrl',
        templateUrl: 'start/start.tpl.html'
      }
    },
    data:{ pageTitle: 'Start' }
  });
})


.controller( 'StartCtrl', function StartController( $scope, apiService, $rootScope, sessionService, $state) {

  $scope.administrationMode = false;
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
      if(result && result.error) {
        console.log("error happened");
        $scope.error = "Error logging in.";
      }
      else {
        $scope.error = false;
        $state.go($state.current, {}, {reload: true});
      }

    });
  };
  if(!$scope.loggedIn) {
    return;
  }


  $scope.getLastRecords = function() {
    apiService.getLastRecords().then(function(result) {
      $scope.lastRecords = result;
    });
  };
  $scope.getLastRecords();

  //for submitting categories
  $scope.category = {};

  $scope.currentlyTrackingId = null;
  $scope.currentlyTrackingName = null;

  apiService.getCategories().then(function(result) {
    $scope.categories = result;
  });
  
  $scope.submitCategory = function() {
    apiService.submitCategory($scope.category).then(function(result) {
      if(result === false) {

      }
      else {
        $scope.categories.push(result.data);
      }

    });
  };
  $scope.removeCategory = function(id) {
    apiService.removeCategory(id).then(function(result) {

      _.remove($scope.categories, {id: id});
    });
  };

  $scope.startTracking = function(id, name) {
    $state.go('timer', {timerId: id, categoryName: name});
 
  };


  $scope.stopTracking = function() {
    apiService.stopTracking($scope.currentlyTracking.id).then(function(result) {
      $scope.lastRecord = {};
      $scope.lastRecord.tracking = $scope.currentlyTracking;
      $scope.lastRecord.data = result;
      $scope.currentlyTracking = null;
      $scope.categoryRecords = null;
      $scope.getLastRecords();
    });
  };


  $scope.viewRecords = function(id) {
    apiService.getCategoryRecords(id).then(function(result) {
      $scope.categoryRecords = {};
      $scope.categoryRecords.data = result;
      $scope.categoryRecords.id = id;

    });
  };

  $scope.hideRecords = function() {
    $scope.categoryRecords = null;
  };
  
  $scope.deleteEntry = function(id) {
    apiService.removeEntry(id).then(function(result) {
      if($scope.categoryRecords && $scope.categoryRecords.id) {
        $scope.viewRecords($scope.categoryRecords.id);
      }
      else if($scope.currentlyTracking && $scope.currentlyTracking.categoryId) {
        $scope.viewRecords($scope.currentlyTracking.categoryId);
      }

    });
  };

  $rootScope.$on('unauthorized',function(event){
    $scope.logOutUser();
  });
  
  $scope.logOutUser = function() {
    sessionService.logOutUser();
    $state.go($state.current, {}, {reload: true});
  };
  
  $scope.toggleAdminMode = function() {
    $scope.administrationMode = !$scope.administrationMode;
  };
})

;

