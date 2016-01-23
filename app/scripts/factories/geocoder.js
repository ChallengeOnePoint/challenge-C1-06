'use strict';

/**
* @ngdoc function
* @name xavierContactApp.directive:geocoder
* @description
* # geocoder
* Controller of the xavierContactApp
*/

angular.module('xavierContactApp').factory('Geocoder',
  function($http, $q){
    var API = {
      getLocation : function(number, street, city, postcode){
        return $q(function(resolve, reject) {

          var url = "https://maps.googleapis.com/maps/api/geocode/json?";
          var address = number + "," + street + "," + city + "," + postcode;

          url += $.param({
            address: address,
            key:    "AIzaSyDbZinS69Lfy9EeCj7yoUkrjpOY0GiGQpk"
          });

          $http.get(url)
          .success(function(data) {
            var position = data.results[0].geometry.location;

            return resolve(position);
          });
        });

      }
    };
    return API;
  });
