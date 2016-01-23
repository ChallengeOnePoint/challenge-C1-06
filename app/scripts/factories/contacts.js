'use strict';

/**
 * @ngdoc function
 * @name xavierContactApp.directive:onReadFile
 * @description
 * # onReadFile
 * Controller of the xavierContactApp
 */

angular.module('xavierContactApp').factory('Contacts',
  function($firebaseArray, FirebaseUrl){
    var Contacts = {
      addContact : function(contact){
        var contactsRef = new Firebase(
          `${FirebaseUrl}/`
        );
        $firebaseArray(contactsRef).$add(contact);
      },
      getContacts : function() {
        var contactsRef = new Firebase(
          `${FirebaseUrl}/`
        );
        return $firebaseArray(contactsRef).$loaded();
      }
    };
    return Contacts;
  });
