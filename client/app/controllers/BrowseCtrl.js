app.controller('BrowseCtrl', function($scope, $http) {

  $scope.users = "";

  $http.get('/api/seniors')
    .then(({data: {seniorObject}}) => {
      $scope.users = seniorObject;
    });

});