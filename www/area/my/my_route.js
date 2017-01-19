/**
 * Created by baocheng on 2017/1/19.
 */
// tab路由模块
angular.module('my.route', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab.my', {
        url: '/my',
        views: {
          'tab-my': {
            templateUrl: 'area/my/my.html',
          }
        }
      })
  });
