/**
 * Created by baocheng on 2017/1/19.
 */
// tab路由模块
angular.module('cart.route', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab.cart', {
        url: '/cart',
        views: {
          'tab-cart': {
            templateUrl: 'area/cart/cart.html',
          }
        }
      })
  });
