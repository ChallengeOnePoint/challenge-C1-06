'use strict';

/**
 * @ngdoc function
 * @name xavierContactApp.directive:geocoder
 * @description
 * # geocoder
 * Controller of the xavierContactApp
 */

angular.module('xavierContactApp').factory('Geocoder',
  function($http){
    var API = {
      getLocation : function(address, postcode, street){
        return;
      }
    };
    return API;
  });
