// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html",
          controller: 'SendCtrl'
      }
    }
  })

  .state('app.index', {
    url: "/index",
    views: {
      'menuContent': {
        templateUrl: "templates/index.html"
      }
    }
  })
    /*.state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'HomeCtrl'
        }
      }
    })*/

      .state('app.playlists', {
          url: "/playlists",
          views: {
              'menuContent': {
                  templateUrl: "templates/playlists.html",
                  controller: 'HomeCtrl'
              }
          }
      })

      .state('app.ads', {
          url: "/ads",
          views: {
              'menuContent': {
                  templateUrl: "templates/ads.html",
                  controller: 'HomeCtrl'
              }
          }
      })

  .state('app.single', {
    url: "/ad/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/ad.html",
        controller: 'SingleCtrl'
      }
    }
  })
      .state('app.new', {
          url: "/new",
          views: {
              'menuContent': {
                  templateUrl: "templates/new.html",
                  controller: 'SendCtrl'
              }
          }
      })
      .state('app.delete', {
          url: "/delete/:id",
          views: {
              'menuContent': {
                  templateUrl: "templates/delete.html",
                  controller: 'HomeCtrl'
              }
          }
      })

        .state('app.edit',{
            url:'/playlist/edit/:id',
            controller:'EditCtrl',
            templateUrl:'templates/edit.html'
        });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/ads');


});
