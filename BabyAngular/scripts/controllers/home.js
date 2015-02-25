'use strict';

angular.module('babymockr')

  .controller('Home', function ($scope, $http, DemoService, Tools) {

    $scope.api = "http://127.0.0.1:8000/";

    // detail and list babyname variables
    $scope.babyname = {};
    $scope.babynames = [];

    // babyname crud begin
    var get_babynames = $http.get($scope.api + "babynames/")
      .success(function(data){
        $scope.babynames = data;
      })
      .error(function(data){
        alert("Nope. Could not get teh babynames.");
      $scope.error = ["There was a problem retrieving the babynames."];
      })
    ;

    $scope.add_babyname = function(){
      $http.post(
        $scope.api + 'babynames/',
        {'name': $scope.new_babyname, 'rank': null, 'mockr_user': 1}
      )
        .success(function(data){
          $scope.babynames.push(data);
        })
        .error(function(data){
          alert("Babyname: "+$scope.new_babyname+"; post failed.");
        })
      ;
    };

    // babyname crud end
    // needs detail, edit, delete

  });

