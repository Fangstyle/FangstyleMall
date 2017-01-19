// 引导页路由模块
angular.module('guidePage.route', ['guidePage.controller'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('guidePage', {
        url: '/guidePage',
        templateUrl: 'area/guidePage/guidePage.html',
        controller: 'GuidePageCtrl'
      })

  });
