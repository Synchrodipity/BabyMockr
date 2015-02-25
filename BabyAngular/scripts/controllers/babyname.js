'use strict';

angular.module('babymockr')

  .controller('Babyname', function ($scope, $http, Tools, $routeParams) {

    $scope.babyname = {};

    $scope.babyname = $http.get(Tools.api + 'babyname/' + $routeParams.id)
      .success(function(data){
        $scope.babyname = data;
      })
      .error(function(data){
        alert("Error.");
      })
    ;

    $scope.edit_name = function(){
      $http.patch(
        Tools.api + 'babyname/' + $routeParams.id,
        $scope.babyname
      )
        .success(function(data){
          $scope.name = data;
        })
        .error(function(data){
          alert("Error.");
        })
      ;
    };

    $scope.delete_name = function(){
      $http.delete( Tools.api + 'babyname/' + $routeParams.id)
        .success(function(data){
          $scope.name = data;
        })
        .error(function(data){
          alert("Error.");
        })
      ;
    };

  });