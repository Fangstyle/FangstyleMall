/**
 * Created by baocheng on 2017/1/19.
 */
// 全局路由模块
angular.module('route', [
  'tab.route', 'home.route',
  'category.route', 'cart.route',
  'my.route','guidePage.route',
])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/tab/home');

  });

