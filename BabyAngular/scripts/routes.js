'use strict';

angular.module('babymockr')

  .config(function ($routeProvider) { // Inject the route provider module

    // $provide.decorator('$sniffer', function($delegate) {
    //   $delegate.history = false;
    //   return $delegate;
    // });

    $routeProvider
      // home page
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'Home'
      })

      // names: list, add
      .when('/babynames/', {
        templateUrl: 'templates/babynames.html',
        controller: 'Babynames'
      })

      // name: view, edit, delete
      .when('/babyname/:id/', {
        templateUrl: 'templates/babyname.html',
        controller: 'Babyname'
      })

      // mocks: list, add
      .when('/mocks/', {
        templateUrl: 'templates/mock.html',
        controller: 'Mocks'
      })

      // mock: view, edit, delete
      .when('/mock/:id/', {
        templateUrl: 'templates/mocks.html',
        controller: 'Mock'
      })

      // profiles: list
      .when('/users/', {
        templateUrl: 'templates/users.html',
        controller: 'Users'
      })

      // profile: view, edit, delete
      .when('/user/:id/', {
        templateUrl: 'templates/user.html',
        controller: 'User'
      })
    ;

    //$locationProvider.html5Mode(true).hashPrefix('!');
  });
