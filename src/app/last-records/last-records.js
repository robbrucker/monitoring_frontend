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
angular.module( 'ngBoilerplate.last-records', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider  ) {
  $stateProvider.state( 'lastRecords', {
    url: '/last-records',
    views: {
      "main": {
        controller: 'LastRecordsCtrl',
        templateUrl: 'last-records/last-records.tpl.html'
      }
    },
    data:{ pageTitle: 'Last Records' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'LastRecordsCtrl', function LastRecordsController( $scope, apiService, $rootScope, sessionService, $state) {

  $scope.administrationMode = false;
  $scope.viewingRecords = false;
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

  apiService.getCategory().then(function(result) {
    $scope.categories = result;
  });

  $scope.viewRecords = function(id, name) {
    $scope.viewingRecords = true;
    apiService.getCategoryRecords(id).then(function(result) {
      $scope.categoryRecords = {};
      $scope.categoryRecords.data = result;
      $scope.categoryRecords.id = id;
      $scope.categoryRecords.name = name;

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

