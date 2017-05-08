/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.start', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
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

/**
 * And of course we define a controller for our route.
 */
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
      $state.go($state.current, {}, {reload: true});
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

  apiService.getCategory().then(function(result) {
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

