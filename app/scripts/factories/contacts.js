'use strict';

/**
 * @ngdoc function
 * @name xavierContactApp.directive:Contacts
 * @description
 * # Contacts
 * Controller of the xavierContactApp
 */

angular.module('xavierContactApp').factory('Contacts',
  function($firebaseArray, $firebaseObject,FirebaseUrl){
    var Contacts = {
      addContact : function(contact){
        var contactsRef = new Firebase(FirebaseUrl);
        return $firebaseArray(contactsRef).$add(contact);
      },
      getContacts : function() {
        var contactsRef = new Firebase(FirebaseUrl);
        return $firebaseArray(contactsRef);
      },
      getContact : function(id) {
        var contactRef = new Firebase(FirebaseUrl).child(id);
        return $firebaseObject(contactRef);
      },
      deleteContact : function(id) {
        var contactRef = new Firebase(FirebaseUrl).child(id);
        contactRef.remove();
      }
    };
    return Contacts;
  });
