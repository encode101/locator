angular.module('SystemService',[])
.service('SystemService', function($http, $q, SmsService){
	return {
			isWifiEnabled: function(){
				// var checkstatus = $q.defer();
				WifiWizard.setWifiEnabled(true, function(){
				     	// checkstatus.resolve ({"wifiEnabled": true});
				     	alert("Wifi is turned on");
				    }, function(error){
				    	// checkstatus.resolve ({"wifiEnabled": false, "hint":error});
				    	alert("Unable To Turn On Wifi")
				    });
				// return checkstatus.promise;
			},
			getLocation: function(number){
				// var sendLocation =$defer();
				var onSuccess = function(position){
		              var text  = "http://www.rahulmishra.com/locator/index.html#/"
		                +position.coords.latitude+"/"
		                +position.coords.longitude;
		              
		              var res = SmsService.sendSms(number, text);
					  document.getElementById('info').innerHTML = res;
		             // sendLocation.resolve({"status": "success"});
		             alert(text)
	          	}
          		navigator.geolocation.getCurrentPosition(onSuccess);    
			}
		} 
	});