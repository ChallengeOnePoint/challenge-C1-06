'use strict';

/**
 * @ngdoc function
 * @name xavierContactApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the xavierContactApp
 */
angular.module('xavierContactApp')
  .controller('AddCtrl', function ($scope, Contacts, Geocoder) {
    $scope.contact = {};

    $scope.addContact = function(){
      Geocoder.getLocation(
        $scope.contact.number,
        $scope.contact.street,
        $scope.contact.city,
        $scope.contact.postcode
        )
        .then(function(position) {
          $scope.contact.position = position;
          Contacts.addContact($scope.contact).then(function(){
            alert("contact added!");
          });
        });
    };
  });
