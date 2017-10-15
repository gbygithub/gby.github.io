define(['jquery', 'angular', 'ocLazyLoad', 'ui-router', 'bootstrap','ui-bootstrap','ngStorage', 'zh-cn','materialize'], function() {
	// 定义 angular 模块
	var app = angular.module('portal.app', ['oc.lazyLoad', 'ui.router','ngStorage', 'ui.bootstrap']);
	app.controller("ctr_app", ['$scope',
		function($scope) {
//			console.log(233333333)
		}])
	app.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/a/login"); //默认登录
			$stateProvider
				.state('a', {
					url: '/a',
					abstract: true,
					templateUrl: 'portal/app.html'
				})
				.state('a.login', {
					//登录
					url: '/login?returnUrl',
					templateUrl:'portal/core/login/login.html'
				})	
		}
	]);
	return app;
});