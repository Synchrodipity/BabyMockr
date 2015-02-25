'use strict';

angular.module('babymockr')

  .controller('Babynames', function ($scope, $http, Tools) {

    $scope.babynames = [];

    // var get_babynames = $http.get("http://127.0.0.1:8000/babynames/")
    //   .success(function(data){
    //     $scope.babynames = data;
    //   })
    //   .error(function(data){
    //     alert("Nope. Could not get teh babynames.");
    //   $scope.error = ["There was a problem retrieving the babynames."];
    //   })
    // ;

    var get_babynames = $http.get(Tools.api + "babynames/")
      .success(function(data){
        for (var i = 0; i<data.length; i++) { $scope.babynames.push(data[i]) };
      })
      .error(function(data){
        alert("Error.");
      })
    ;

    $scope.add_babyname = function(){
      $http.post(
        Tools.api + 'babynames/',
        {}
      )
        .success(function(data){
          $scope.babynames.push(data);
        })
        .error(function(data){
          alert("Error.");
        })
      ;
    };

  });

