'use strict';

/**
 * @ngdoc function
 * @name xavierContactApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the xavierContactApp
 */
angular.module('xavierContactApp')
  .controller('MapCtrl', function ($scope, Contacts) {
    Contacts.getContacts().$loaded().then(function(contacts) {
      $scope.contacts = contacts;
    });
  });
