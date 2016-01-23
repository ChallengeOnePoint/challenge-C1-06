'use strict';

/**
 * @ngdoc function
 * @name xavierContactApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xavierContactApp
 */
angular.module('xavierContactApp')
  .controller('MainCtrl', function ($scope, Contacts) {

    Contacts.getContacts().$loaded().then(function(contacts) {
      $scope.contacts = contacts;
    });
    /*Contacts.addContact({
      "number":"123",
      "street":"Rue Du Faubourg Saint-Martin",
      "city":"Paris 10e Arrondissement",
      "postcode":"75010",
      "firstname":"Abbey",
      "lastname":"Desan"
    });*/
    /*$scope.showContent = function($fileContent){
        $scope.content = $fileContent;
    };*/
  });
