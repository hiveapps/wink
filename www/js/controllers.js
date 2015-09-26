var wink = angular.module('wink.controllers', []);

//Login Controller
wink.controller("AppCtrl", function($scope, $state, $firebaseAuth, $cordovaOauth) {
  
  var auth = $firebaseAuth(fb);
 
    $scope.login = function() {
        $cordovaOauth.facebook("1684910905080080", ["email"]).then(function(result) {
            auth.$authWithOAuthToken("facebook", result.access_token).then(function(authData) {
                console.log(JSON.stringify(authData));
                $state.go('tab.dash');
            }, function(error) {
                console.error("ERROR: " + error);
            });
        }, function(error) {
            console.log("ERROR: " + error);
        });
    }
});

//Totally functioning simple login
//wink.controller("LoginCtrl", function($scope, $firebaseAuth, $state){
//var users = new Firebase("https://wink-connections.firebaseio.com/users");

//  $scope.register = function(username, password){
//    users.createUser({
//      email    : username,
//      password : password
//    }, function(error, userData) {
//      if (error) {
//        console.log("Error creating user:", error);
//      } else {
//        $state.go('tab.dash');
//      }
//    });
//  }
//  $scope.login = function(username, password){
//    users.authWithPassword({
//      email    : username,
//      password : password
//    }, function(error, authData) {
//      if (error) {
//        console.log("Login Failed!", error);
//      } else {
//        $state.go('tab.dash');
//      }
//    });
//  }
//});

//Submit post controller
wink.controller('addController',function($scope,$firebaseArray, $state, postService){
	$scope.submitPost = function(){
		$scope.newPost = postService.all;
		$scope.newPost.$add({
			postDescription: $scope.postDescription,
			postLocation: $scope.postLocation
		});
    $scope.master= null;
    
      $scope.reset = function() {
        $scope.postDescription = angular.copy($scope.master);
        $scope.postLocation = angular.copy($scope.master);
        if ($scope.form) $scope.form.$setPristine();
      };
      $scope.reset();
	};
});


//Thread controller
wink.controller('DashCtrl', function($scope) {

});


//Accept button Controller
wink.controller('AcceptCtrl', function($scope, $element) {

});

//Radio Checkbox Controller
wink.controller('MainCtrl', function($scope) {

  $scope.clientSideList = [
    { text: "Spam or Scam", value: "ss" },
    { text: "Contains Hate Speech", value: "hs" },
    { text: "Promotes Violence/Hateful Actions", value: "vh" },
    { text: "Duplicate or Fake", value: "df" }
  ];

  $scope.serverSideList = [
    { text: "Go", value: "go" },
    { text: "Python", value: "py" },
    { text: "Ruby", value: "rb" },
    { text: "Java", value: "jv" }
  ];
  
  $scope.data = {
    clientSide: null
  };
  
  $scope.serverSideChange = function(item) {
    console.log("Selected Serverside, text:", item.text, "value:", item.value);
  };
  
});

// Report Controller
wink.controller('ReportCtrl', function($scope, $ionicModal) {
   
  $ionicModal.fromTemplateUrl('report-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
});


//Chats controller
wink.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

//Chat Details Controller
wink.controller('ChatDetailCtrl',function($scope,$firebaseArray, $state, $stateParams, Chats, messageService){
	
  $scope.chat = Chats.get($stateParams.chatId);
  
  $scope.sendMessage = function(){
		$scope.newMessage = messageService.all;
		$scope.newMessage.$add({
			messageDetails: $scope.messageDetails
		});
    $scope.master= null;
    
      $scope.reset = function() {
        $scope.messageDetails = angular.copy($scope.master);
        if ($scope.form) $scope.form.$setPristine();
      };
      $scope.reset();
	};
});


//Controller to Hide tabs for select page
wink.controller('TabsCtrl', function($scope, $rootScope, $state) {
    $rootScope.$on('$ionicView.beforeEnter', function() {

        $rootScope.hideTabs = false;

        if ($state.current.name === 'tab.chat-detail') {
            $rootScope.hideTabs = true;
        }
    });
});


//Post button controller
wink.controller('PostCtrl', function($scope, $ionicModal) {
   
  $ionicModal.fromTemplateUrl('post-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
});


//Nearby Sub-Tab Controller
wink.controller('NearbyCtrl', function($scope, $ionicPopover) {

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('nearby-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
});


//Notificatoins Controller
wink.controller('NotificationsCtrl', function($scope) {});


//Profile Form Controller - This removes the disabled parameter on the Profile input fields
wink.controller("DisableCtrl", function($scope) {
  $scope.mydisabled = true;
});


//Account Controller
wink.controller('AccountCtrl', function($scope, $ionicModal) {
  //Basic notification settings
  $scope.settingsList = [
    { text: "Connections", checked: true },
    { text: "Tags", checked: true },
    { text: "Messages", checked: true },
    { text: "Profile Info Unlocked", checked: true },
  ];
  
  //Push Notification Settings
  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };
  
  $scope.pushNotification = { checked: true };
  
  //Email Notification Settings
  $scope.emailNotificationChange = function() {
    console.log('Email Notification Change', $scope.emailNotification.checked);
  };
  
  $scope.emailNotification = {checked: true};
  
});