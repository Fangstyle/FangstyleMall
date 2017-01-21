// 商品列表页面路由模块
angular.module('goodsList.route', ['goodsList.controller'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('goodsList', {
        url: '/goodsList/:typeNumber',
        templateUrl: 'area/goodsList/goodsList.html',
        controller: 'GoodsListCtrl'
      })
  });
