app.controller('ViewProfileCtrl', function($scope, $routeParams, $http) {
  const userPath = `/api/seniors/${$routeParams.userId}`;
  $scope.user = "";
  $http.get(userPath)
    .then((user) => {
      console.log("USER", user);
      $scope.user = user;
    });

  $scope.chatPressed = () => {
    console.log("CHAT PRESSED");
  }
});