app.controller('ViewProfileCtrl', function($scope, $routeParams, $http, $rootScope, $location) {
  const userPath = `/api/seniors/${$routeParams.userId}`;
  $scope.user = "";
  $http.get(userPath)
    .then(({data}) => {
      $scope.user = data.profile;
      $scope.user._id = data._id;
    });

  function compare(personOne, personTwo) {
    if (personOne.userId < personTwo.userId)
      return -1;
    if (personOne.userId > personTwo.userId)
      return 1;
  }

  $scope.chatPressed = (user) => {

    let usersArray = [
        {
          userId: $rootScope.user._id,
          userName: $rootScope.user.profile.name
        },
        {
          userId: user._id,
          userName: user.name
        }
      ];

    usersArray.sort(compare);

    const usersObj = {
      users: usersArray
    }

    $http.post('/api/chats', usersObj)
      .then(({data}) => {
        console.log(data._id)
        $location.path(`chats/${data._id}`)
      })

  }
});