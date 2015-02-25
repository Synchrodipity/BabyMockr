'use strict';

angular.module('babymockr')
  // Here we see the name of the service defined.
  // Following the name, we see an anonymous function.
  // It's important to note that services behave a bit differently
  // from controllers.  Where controllers manipulate the scope
  // to interact with users, services return objects which other
  // pieces of code will use as APIs.
  .factory('Tools', function ($timeout, $q, $http) {
    // Here, we are returning an object with a list and a method
    // that shows an alert with a specified name.  Any controller
    // can use this if the service is injected into the controller.
    var api_domain = "http://127.0.0.1:8000/";

    return {

      "api": api_domain,

    };
  });