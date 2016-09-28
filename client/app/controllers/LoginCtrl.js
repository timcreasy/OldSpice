app.controller('LoginCtrl', function($scope, $location, $http) {
  $scope.loginPressed = () => {

    const user = {
      email: $scope.email,
      password: $scope.password
    };

    $http.post('/api/login', user)
      .then(({data}) => {
        $location.path('browse');
      })
      .catch(() => {
        $location.path('login');
      });

  }
});