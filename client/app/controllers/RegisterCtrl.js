app.controller('RegisterCtrl', function($scope, $location) {
  $scope.registerPressed = () => {
    console.log($scope.email, $scope.password);
    $location.path('profile/create');
  }
});