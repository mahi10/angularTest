var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/signin');
    
    $stateProvider
        

        .state('signin', {
            url: '/signin',
            templateUrl: './login/signIn.html',
            controller:'LoginController'
        })
        
        .state('signup', {
            url: '/signup',
            templateUrl: './signup/signUp.html' ,
            controller: 'signUpController'
            
            
        });
        
});
routerApp.run(function($rootScope, $location, $state, LoginService) {
    console.clear();
    console.log('running');
   if(!LoginService.isAuthenticated()) {
       $state.transitionTo('signin');
     }
 });