/**
 * Created by baocheng on 2017/1/19.
 */
// 商品列表页面路由模块
angular.module('category.route', ['category.controller'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab.category', {
        url: '/category',
        views: {
          'tab-category': {
            templateUrl: 'area/category/category.html',
            controller:'CategoryCtrl',
          }
        }
      })
  });
