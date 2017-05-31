angular.module( 'ngBoilerplate', [
  'templates-app',
  'intecerceptor.service',
    'session.service',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.start',
    'angularMoment',
  'ngBoilerplate.timer',
    'api.service',
    'environment.service',
  'ui.bootstrap',
    'ngBoilerplate.last-records',
    'ngBoilerplate.today-records',
'timer',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/start' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})
    .config(['$httpProvider', function($httpProvider) {
      delete $httpProvider.defaults.headers.common["X-Requested-With"];
    }])
;

