app.controller('ViewProfileCtrl', function($scope, $routeParams, $http) {
  const userPath = `/api/seniors/${$routeParams.userId}`;
  $scope.user = "";
  $http.get(userPath)
    .then(({data}) => {
      $scope.user = data.profile;
      $scope.user._id = data._id;
    });

  $scope.chatPressed = (userId) => {
    console.log("CHAT PRESSED with:", userId);
  }
});