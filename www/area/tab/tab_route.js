/**
 * Created by baocheng on 2017/1/19.
 */
// tab路由模块
angular.module('tab.route', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'area/tab/tabs.html'
      })
  });
