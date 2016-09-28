app.controller('RegisterCtrl', function($scope, $location, $http) {
  $scope.registerPressed = () => {

    const user = {
      email: $scope.email,
      password: $scope.password
    };

    $http.post('/api/seniors', user)
      .then((newUser) => {
        $location.path('profile/create/');
      })
      .catch(() => {
        $location.path('register');
      });

  }
});