/**
 * Created by baocheng on 2017/1/19.
 */
angular.module('home.route', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'area/home/home.html',
          }
        }
      })
  });
