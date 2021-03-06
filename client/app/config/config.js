app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: 'partials/home.html'
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'partials/login.html'
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
    .when('/profile/:userId', {
      controller: 'ViewProfileCtrl',
      templateUrl: 'partials/view_profile.html'
    })
    .when('/chats/:chatId', {
      controller: 'ChatCtrl',
      templateUrl: 'partials/chat.html'
    })
    .otherwise('/');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    })
})