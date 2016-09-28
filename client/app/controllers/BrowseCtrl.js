app.controller('BrowseCtrl', function($scope, $http, $rootScope) {
  $rootScope.browseView = true;

  $scope.users = "";

  $http.get('/api/seniors')
    .then(({data: {seniorObject}}) => {
      $scope.users = seniorObject;
    });


  $scope.$on('$destroy',function(){
    $rootScope.browseView = false;
  });

});