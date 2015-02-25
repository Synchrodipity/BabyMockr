'use strict';

angular.module('babymockr')

  .controller('User', function ($scope, $http, Tools) {

    $scope.user = {};

    $scope.view_user = function(){
      $http.get(Tools.api + 'name/' + user_id)
        .success(function(data){
          $scope.user = data;
        })
        .error(function(data){
          alert("Error.");
        })
      ;
    };

    $scope.edit_user = function(){
      $http.patch(
        Tools.api + 'user/' + user_id,
        {"hi": "hi"}
      )
        .success(function(data){
          $scope.user = data;
        })
        .error(function(data){
          alert("Error.");
        })
      ;
    };

    $scope.delete_user = function(){
      $http.delete( Tools.api + 'user/' + user_id)
        .success(function(data){
          $scope.user = data;
        })
        .error(function(data){
          alert("Error.");
        })
      ;
    };

  });