'use strict';

/**
 * @ngdoc overview
 * @name xavierContactApp
 * @description
 * # xavierContactApp
 *
 * Main module of the application.
 */
angular
  .module('xavierContactApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl',
        controllerAs: 'edit'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).constant('FirebaseUrl', 'https://xavier-contacts.firebaseio.com/#-J8MVKLed7mTFM6XuvHb|95d1328c44636a8b3e91ea688b87347d');
