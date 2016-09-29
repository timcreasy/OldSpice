app.controller('LoginCtrl', function($scope, $location, $http, $rootScope) {
  $scope.loginPressed = () => {

    const user = {
      email: $scope.email,
      password: $scope.password
    };

    $http.post('/api/login', user)
      .then(({data}) => {
        $rootScope.user = data;
        $location.path('browse');
      })
      .catch(() => {
        $location.path('login');
      });

  }
});