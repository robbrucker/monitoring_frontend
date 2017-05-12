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
angular.module( 'ngBoilerplate.timer', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider  ) {
  $stateProvider.state( 'timer', {
    url: '/timer?timerId&categoryName',
    views: {
      "main": {
        controller: 'TimerCtrl',
        templateUrl: 'timer/timer.tpl.html'
      }
    },
    data:{ pageTitle: 'Timer' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'TimerCtrl', function TimerController( $scope, apiService, $rootScope, sessionService, $state, $stateParams, moment) {
  var id = $stateParams.timerId;
  var name = $stateParams.categoryName;
  $scope.timeStarted = moment(Date.now()).format('h:mm:ss a');
  $scope.manualTime = false;
  $scope.manualEntryCompleted = false;
  $scope.showTimeEntry = true;
  
  apiService.startTracking(id).then(function (result) {
    $scope.currentlyTracking = {};
    $scope.currentlyTracking.categoryId = id;
    $scope.currentlyTracking.id = result.id;
    $scope.currentlyTracking.categoryName = name;

    //todo: refactor
    // $scope.currentlyTrackingCategoryId = id;
    // $scope.currentlyTrackingId = result.id;

  });

  $scope.stopTracking = function() {
    apiService.stopTracking($scope.currentlyTracking.id).then(function(result) {
      $scope.lastRecord = {};
      $scope.lastRecord.tracking = $scope.currentlyTracking;
      $scope.lastRecord.data = result;
      $scope.currentlyTracking = null;
      $scope.categoryRecords = null;
      $state.go('start');
    });

  };
  $scope.enterTimeManually = function() {
    $scope.manualTime = true;
  };
  $scope.range = function(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  };

  
  $scope.manualEntry = function(val) {
    $scope.manualEntryCompleted = true;
    $scope.showTimeEntry = false;
    $scope.timeStarted = moment(val, 'hh:mm:ss a');
  };
  

})
;

