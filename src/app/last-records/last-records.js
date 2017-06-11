
angular.module( 'ngBoilerplate.last-records', [
  'ui.router',
  'plusOne'
])


.config(function config( $stateProvider  ) {
  $stateProvider.state( 'lastRecords', {
    url: '/last-records?category_id',
    views: {
      "main": {
        controller: 'LastRecordsCtrl',
        templateUrl: 'last-records/last-records.tpl.html'
      }
    },
    data:{ pageTitle: 'Last Records' }
  });
})


.controller( 'LastRecordsCtrl', function LastRecordsController( $scope, apiService, $rootScope, sessionService, $state, moment, $stateParams, timeService, lastRecordsService) {
  $scope = lastRecordsService.initialize($scope);
  
  //login
  $scope.isUserLoggedIn = function() {
    $scope.loggedIn = apiService.userLoggedIn() ? true : false;
  };
  $scope.isUserLoggedIn();

  $scope.goBack = function() {
    $scope.categoryRecords = null;
  };
  //for submitting categories


  apiService.getCategories().then(function(result) {
    $scope.categories = result;
  });

  $scope.viewRecords = function(id, name) {
   $scope = lastRecordsService.initializeViewCategoryRecords(id, name, $scope);
    apiService.getCategoryRecords(id).then(function(result) {
      $scope = lastRecordsService.afterGetCategoryRecords(result, $scope);
    });
  };


  if($stateParams.category_id) {
    
    //TODO: Fix this to get category based off of 
    $scope.viewRecords(parseInt($stateParams.category_id, 10), 'test');
  }


  $scope.hideRecords = function() {
    $scope = lastRecordsService.hideRecords($scope);

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


  $scope.editCategoryRecord = function(value, type) {
    if(type === 'start') {
      value.start_time = timeService.convertTime(value.end_time, value.editedStartTime, type);
    }
    else if(type === 'end') {
      value.end_time = timeService.convertTime(value.start_time, value.editedEndTime, type);
    }
    apiService.editCategoryRecords(value).then(function() {
      if(type === 'start') {
        $scope.editingStartVal[value.id] = false;
      }
      else {
        $scope.editingEndVal[value.id] = false;
      }

      $scope.viewRecords($scope.viewingRecord.id, $scope.viewingRecord.name);
    });
  };

  $scope.editEndTime = function(value) {

  };

})

;

