'use strict';

/**
 * @ngdoc function
 * @name xavierContactApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xavierContactApp
 */
angular.module('xavierContactApp')
  .controller('MainCtrl', function () {
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
    };
  });
