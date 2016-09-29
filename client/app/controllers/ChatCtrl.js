app.controller('ChatCtrl', function($scope, $http, $routeParams, $rootScope) {


  let loadMessages = () => {

  const chatPath = `/api/messages/${$routeParams.chatId}`;

  $http.get(chatPath)
    .then((response) => {
      console.log(response);
      $scope.messages = response.data;
    });


  }

  loadMessages();

  $scope.sendMessage = () => {
    const message = {
      message: $scope.message,
      author: $rootScope.user.name,
      id: $routeParams.chatId
    }
console.log(message)

    $http.post('/api/messages', message)
    .then((response) => {
      $scope.messages = ""
      console.log(response);
      $http.get(chatPath)
        .then((response) => {
          console.log(response);
          $scope.$apply(function() {
            $scope.messages = response.data;
          });
        });
    })
  }

});