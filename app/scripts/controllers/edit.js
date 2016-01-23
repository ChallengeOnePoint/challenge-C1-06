'use strict';

/**
 * @ngdoc function
 * @name xavierContactApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the xavierContactApp
 */
angular.module('xavierContactApp')
  .controller('EditCtrl', function ($scope, Contacts, $routeParams) {
    $scope.contact = {};
    Contacts.getContact($routeParams.id).$loaded().then(function(contact) {
      $scope.contact = contact;
    });

    $scope.save = function(){
      $scope.contact.$save().then(function(){
        alert("Contact saved :)");
      });
    };
  });
