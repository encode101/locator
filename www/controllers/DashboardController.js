angular.module('DashboardController', [])
.controller('DashboardController', function($scope, $cordovaSms, SmsService, SystemService) {
  
  $scope.navTitle='<img class="title-image" src="./img/top-icon.png" />';

  document.addEventListener("deviceready", function () { 

  SMS.startWatch();    
  var smsList = [];
  var interceptEnabled = false;

  $scope.locate = {};
  $scope.geolocation = {};

  $scope.locate.mobile="9545600524"   // For Dev

  // Sample SMS
  

  $scope.sendSMS = function(){
    var recepient = "9545600524";
    var msg = "Sample Message Sent";
    SmsService.sendSms(recepient, msg);
  }

  $scope.getLocation = function(){
      var recepient = $scope.locate.mobile;
      var msg = "xlocate";
      SmsService.sendSms(recepient, msg);
  }

    
    // Listening For SMSArrive  
     
     document.addEventListener('onSMSArrive', function(e){

        // Turning Wifi ON


        var data = e.data;
        smsList.push( data ); 
        var msg = data.body;

        // If match found

        if(msg.match(/xloc/gi)){
          SystemService.isWifiEnabled().then(function(data){    // Enabling Wifi If Disabled.
            $scope.wifiEnabled = data.wifiEnabled;
            SystemService.getLocation(data.address);
          })
        }

        if(msg.match(/www.rahulmishra.com/gi)){

          var str = msg;
          var params = str.substring(str.lastIndexOf("#/")+1)
          var longitude = params.substring(params.lastIndexOf("/")+1)
          var latitude = params.substring(params.indexOf("/")+1, params.lastIndexOf("/"));

          $scope.geolocation = {
            latitude: latitude,
            longitude: longitude
          }

          $scope.$apply();
        }

      });

     // Setting Background Mode

     cordova.plugins.backgroundMode.setDefaults({
        resume: false,
     })
     cordova.plugins.backgroundMode.enable();

  });
})