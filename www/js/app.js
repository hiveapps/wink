// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var wink = angular.module('wink', ['ionic', 'wink.controllers', 'wink.services', 'wink.directives', 'firebase'])
var fb = new Firebase ("https://wink-connections.firebaseio.com");

wink.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

wink.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js  
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html' //may have to change this to 'templates/login.html' once login page is default again
  })

  // Each tab has its own nav history stack:
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
    .state('tab.map', {
    url: '/map',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-map.html',
      }
    }
  })
    .state('tab.postDetails', {
    url: '/postDetails',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-postDetails.html',
      }
    }
  })
  .state('tab.post', {
    url: '/post',
    views: {
      'tab-post': {
        templateUrl: 'templates/tab-post.html',
        controller: 'PostCtrl'
      }
    }
  })
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
  .state('tab.notifications', {
    url: '/notifications',
    views: {
      'tab-notifications': {
        templateUrl: 'templates/tab-notifications.html',
        controller: 'NotificationsCtrl'
      }
    }
  })
  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html'
      }
    }
  })
    .state('tab.account', {
    url: '/account',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
      .state('tab.editprofile', {
      url: '/editprofile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-editprofile.html'
        }
      }
    })
      .state('tab.general', {
      url: '/general',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-general.html'
        }
      }
    })
      .state('tab.notificationsettings', {
      url: '/notificationsettings',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-notificationsettings.html'
        }
      }
    })
    .state('tab.privacy', {
      url: '/privacy',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-privacy.html'
        }
      }
    })
    .state('tab.locationsettings', {
      url: '/locationsettings',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-locationsettings.html'
        }
      }
    })
    .state('tab.blockingsettings', {
      url: '/blockingsettings',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-blockingsettings.html'
        }
      }
    })
    .state('tab.terms', {
      url: '/terms',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-terms.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('tab/dash');

});