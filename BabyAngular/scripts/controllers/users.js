'use strict';

angular.module('babymockr')

  .controller('Users', function ($scope, $http, Tools) {

    $scope.users = [];

    $scope.list_users = $http.get(Tools.api + "users/")
      .success(function(data){
        $scope.users.push(data);
      })
      .error(function(data){
        alert("Error.");
      })
    ;

  });