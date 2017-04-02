angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    if (ionic.Platform.isAndroid()) {
      admobid = {
        banner: 'ca-app-pub-6975819273069396/2244460066'
      };

      if (AdMob)
        AdMob.createBanner({
          adId: admobid.banner,
          position: AdMob.AD_POSITION.BOTTOM_CENTER,
          autoShow: true
        });
    }
  });
})

.controller('FuelCtrl', function($scope, $http) {
var _0x9b97=["\x64\x6F\x52\x65\x66\x72\x65\x73\x68","\x66\x75\x65\x6C\x66\x6F\x72\x65\x63\x61\x73\x74","\x64\x61\x74\x61","\x74\x68\x65\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x70\x61\x73\x74\x65\x62\x69\x6E\x2E\x63\x6F\x6D\x2F\x72\x61\x77\x2E\x70\x68\x70\x3F\x69\x3D\x4A\x67\x48\x55\x47\x72\x7A\x61","\x67\x65\x74","\x73\x63\x72\x6F\x6C\x6C\x2E\x72\x65\x66\x72\x65\x73\x68\x43\x6F\x6D\x70\x6C\x65\x74\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\x66\x75\x65\x6C\x70\x72\x69\x63\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x70\x61\x73\x74\x65\x62\x69\x6E\x2E\x63\x6F\x6D\x2F\x72\x61\x77\x2E\x70\x68\x70\x3F\x69\x3D\x55\x5A\x66\x59\x4A\x6D\x64\x73"];$scope[_0x9b97[0]]=function(){$http[_0x9b97[5]](_0x9b97[4])[_0x9b97[3]](function(_0x7796x1){$scope[_0x9b97[1]]=_0x7796x1[_0x9b97[2]]});$http[_0x9b97[5]](_0x9b97[9])[_0x9b97[3]](function(_0x7796x1){$scope[_0x9b97[8]]=_0x7796x1[_0x9b97[2]][_0x9b97[8]]})[_0x9b97[7]](function(){$scope.$broadcast(_0x9b97[6])});};
})

document.addEventListener("backbutton", function() {
	ionic.Platform.exitApp()
})