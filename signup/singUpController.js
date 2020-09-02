
routerApp.controller('signUpController', function($scope,$http) {
    $scope.singUp = function(user){
        //console.log(newcontact);
        var url = 'https://dev-api.alldaydr.com/api/users/signup.json';
        $scope.data = user ;
        var params = {
            'email':$scope.data.email,
            'password': $scope.data.password,
            'first_name'  : $scope.data.first_name,
            'last_name'   : $scope.data.last_name,
            'phone': $scope.data.phone,
            'role': 'patient',
            'gender': 'male',
            'profile': '01/09/2002',
            'device_type': $scope.data.device_type,
            'player_id': ''
            
        } 
        $http.post(url, JSON.stringify(params)).then(function (response) {
           
        }, function (response) {

           
        });


    }  

});