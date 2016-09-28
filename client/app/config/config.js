app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: 'partials/home.html'
    })
    .when('/register', {
      controller: 'RegisterCtrl',
      templateUrl: 'partials/register.html'
    })
    .when('/profile/create/:userId', {
      controller: 'CreateProfileCtrl',
      templateUrl: 'partials/create_profile.html'
    })
    .when('/browse', {
      controller: 'BrowseCtrl',
      templateUrl: 'partials/browse.html'
    })
    .otherwise('/');
})