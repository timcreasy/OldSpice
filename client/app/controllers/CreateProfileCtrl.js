app.controller('CreateProfileCtrl', function($scope) {

  // With JQuery
  let ageRangeSlider = $("#ageRange").slider({});

  $scope.createProfilePressed = () => {

    const userProfile = {
      name: $scope.name,
      age: $scope.age,
      location: $scope.location,
      gender: $scope.gender,
      preferences: {
        minAge: ageRangeSlider.val().split(',')[0],
        maxAge: ageRangeSlider.val().split(',')[1],
        gender: $scope.genderPreference
      }
    };

    console.log(userProfile);
  }
});