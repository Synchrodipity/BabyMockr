'use strict';

angular.module('babymockr')

  .controller('Mock', function ($scope, $http, Tools) {

    $scope.mock = {};

    $scope.view_mock = function(){
      $http.get(Tools.api + 'mock/' + mock_id)
        .success(function(data){
          $scope.mock = data;
        })
        .error(function(data){
          alert("Error.");
        })
      ;
    };

    $scope.edit_mock = function(){
      $http.patch(
        Tools.api + 'mock/' + mock_id,
        {"hi": "hi"}
      )
        .success(function(data){
          $scope.mock = data;
        })
        .error(function(data){
          alert("Error.");
        })
      ;
    };

    $scope.delete_mock = function(){
      $http.delete( Tools.api + 'mock/' + mock_id)
        .success(function(data){
          redirect('/'); // notsure.jpeg
        })
        .error(function(data){
          alert("Error.");
        })
      ;
    };

  });

