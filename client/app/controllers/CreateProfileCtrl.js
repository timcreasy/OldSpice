app.controller('CreateProfileCtrl', function($scope, $routeParams, $http, $location) {

  // Age slider method
  const ageRangeSlider = $("#ageRange").slider({});

  // Grab userId
  const userId = $routeParams.userId;

  $scope.createProfilePressed = () => {

    const userProfile = {
      name: $scope.name,
      age: $scope.age,
      location: $scope.location,
      gender: $scope.gender,
      profilePicture: $scope.profilePicture,
      biography: $scope.biography,
      preferences: {
        minAge: ageRangeSlider.val().split(',')[0],
        maxAge: ageRangeSlider.val().split(',')[1],
        gender: $scope.genderPreference
      }
    };

    // Build up path to user
    const userPath = `/api/seniors/${userId}`;

    $http.put(userPath, {profile: userProfile})
      .then((user) => {
      })
      .catch();

    $location.path('browse');
  }
});