angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('mEETYOURSOULMATE', {
    url: '/page1',
    templateUrl: 'templates/mEETYOURSOULMATE.html',
    controller: 'mEETYOURSOULMATECtrl'
  })

  .state('sIGNUP', {
    url: '/page4',
    templateUrl: 'templates/sIGNUP.html',
    controller: 'sIGNUPCtrl'
  })

  .state('pROFILE', {
    url: '/page5',
    templateUrl: 'templates/pROFILE.html',
    controller: 'pROFILECtrl'
  })

  .state('sUCCESS', {
    url: '/page6',
    templateUrl: 'templates/sUCCESS.html',
    controller: 'sUCCESSCtrl'
  })

  .state('lOGIN', {
    url: '/page7',
    templateUrl: 'templates/lOGIN.html',
    controller: 'lOGINCtrl'
  })

  .state('uploadPhotos', {
    url: '/page6',
    templateUrl: 'templates/uploadPhotos.html',
    controller: 'uploadPhotosCtrl'
  })

  .state('hOMEPAGE', {
    url: '/page9',
    templateUrl: 'templates/hOMEPAGE.html',
    controller: 'hOMEPAGECtrl'
  })

  .state('vIEWPROFILE', {
    url: '/page10',
    templateUrl: 'templates/vIEWPROFILE.html',
    controller: 'vIEWPROFILECtrl'
  })

  .state('page11', {
    url: '/page11',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

$urlRouterProvider.otherwise('/page11')

  

});