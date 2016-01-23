'use strict';

/**
 * @ngdoc function
 * @name xavierContactApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the xavierContactApp
 */
angular.module('xavierContactApp')
  .controller('AddCtrl', function ($scope, Contacts) {
    $scope.contact = {};

    $scope.add = function(){
      Contacts.addContact($scope.contact).then(function(contact) {
        alert("Your contact is added");
      });
    };
  });
