'use strict';

angular.module('babymockr')

  .controller('Mocks', function ($scope, $http, Tools) {

    $scope.mocks = [];

/*    $scope.list_mocks = $http.get($scope.api + "mocks/")
      .success(function(data){
        $scope.objs.push(data);
      })
      .error(function(data){
        alert("Error.");
      })
    ;

    $scope.add_obj = function(){
      $http.post(
        $scope.api + 'objs/',
        {}
      )
        .success(function(data){
          $scope.objs.push(data);
        })
        .error(function(data){
          alert("Error.");
        })
      ;
    };*/

  });

