
angular.module( 'ngBoilerplate.timer', [
  'ui.router',
  'plusOne'
])
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
  $scope.timeStarted = moment(Date.now()).format('HH:mm:ss');
  $scope.manualTime = false;
  $scope.manualEntryCompleted = false;
  $scope.showTimeEntry = true;


  $scope.searchVal = "";
  $scope.searchResults = {};
  $scope.getTagsFromApi = function() {

    apiService.getTags(id).then(function(val) {
      // $scope.showSearchResults = false;
      _.each(val, function(tagResult) {
        if(!_.find($scope.searchResults, {name: tagResult.name})) {
          $scope.searchResults.push({title: "Add "+tagResult.name, name: tagResult.name, action: "addTag()", id: tagResult.id});
        }
      });
    });
  };
  $scope.getTagsFromApi();

  
  apiService.startTracking(id).then(function (result) {
    $scope.currentlyTracking = {};
    $scope.currentlyTracking.categoryId = id;
    $scope.currentlyTracking.id = result.id;
    $scope.currentlyTracking.categoryName = name;

    //todo: refactor
    // $scope.currentlyTrackingCategoryId = id;
    // $scope.currentlyTrackingId = result.id;

  });

  $scope.$on('timer-stopped', function (event, data) {
    if(data && data.millis) {
       $scope.calculatedTime = moment(Date.now()).subtract(data.millis);
      console.log("New start time ", $scope.calculatedTime);
    }

  });

  $scope.stopTracking = function() {
    $scope.$broadcast('timer-stop');
    $scope.timerRunning = false;
    $rootScope.$broadcast('timer-stopped');
    apiService.stopTracking($scope.currentlyTracking.id, $scope.calculatedTime).then(function(result) {
      $scope.lastRecord = {};
      $scope.lastRecord.tracking = $scope.currentlyTracking;
      $scope.lastRecord.data = result;
      $scope.categoryRecords = null;
      $state.go('lastRecords', {category_id: $scope.currentlyTracking.categoryId});
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


  $scope.initializeSearchResults = function(searchVal) {
    $scope.searchResults = [];
    if(searchVal) {
      $scope.searchResults.push({title: "Add Value "+searchVal, name: searchVal, action: "addVal("+searchVal+")", id: 1});
    }
    else {
      $scope.searchResults.push({title: "Add Value", name: "Add Value", action: "addVal()", id: 1});
    }

  };

  $scope.initializeSearchResults();

  $scope.showSearchResults = false;

  $scope.searchVal = "";
  $scope.searchText = function(added) {
    if($scope.searchVal && $scope.searchVal !== "") {

      $scope.showSearchResults = true;
      var frozenVal = _.clone($scope.searchVal);

      apiService.getTagFuzzySearch(id, frozenVal).then(function(results) {
        if(!added || added !== true) {
          $scope.initializeSearchResults(frozenVal);
        }
        _.each(results, function(d) {
          $scope.searchResults.push({title: "Tag "+d.name, name: d.name, action: "addTag("+d.id+")", id: d.id});
        });
      });
    }
    else {
      $scope.showSearchResults = false;
    }
  };
  
  

  $scope.addVal = function(frozenVal) {
    $scope.showSearchResults = false;
    apiService.addCategoryTag(frozenVal, id).then(function(response) {
      _.remove($scope.searchResults, {name: frozenVal});
      response.title = response.name;
      $scope.addTag(null, response);
      // $scope.initializeSearchResults(frozenVal);
      //$scope.searchText(true);
    });
  };


  $scope.tags = [];
  $scope.addTag = function(id, newTag) {
    var tag = {};
    if(newTag) {
      tag = newTag;

    }
    else {
      tag = _.find($scope.searchResults, {id: id});
      _.remove($scope.searchResults, {id: tag.id});
    }
    tag.tag_id = tag.id;
    $scope.tags.push(tag);
    apiService.addTimerTag($scope.currentlyTracking.id, tag.tag_id);

  };

  $scope.timerRunning = true;

  $scope.startTimer = function (){
      $scope.$broadcast('timer-start');
      $scope.timerRunning = true;
  };

  $scope.stopTimer = function (){
      $scope.$broadcast('timer-stop');
      $scope.timerRunning = false;
  };
 $scope.showItemDisplay = function() {
   $scope.itemDisplay = true;
   if(!$scope.categories) {
     apiService.getCategory().then(function(result) {
       $scope.categories = result;
     });
   }

 };
})
;

