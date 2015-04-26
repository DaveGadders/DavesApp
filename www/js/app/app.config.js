/* APP CONFIG */
var appConfig = function($stateProvider, $urlRouterProvider) 
{

  openFB.init({appId: '822229434530417'});

  $stateProvider

  /* MENU */
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppController'
  })

  /* HOME */
  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
        controller: 'HomeController'
      }
    }
  })

  /* LATEST RECIPES */
  .state('app.latestrecipes', {
    url: "/latest-recipes",
    views: {
      'menuContent': {
        templateUrl: "templates/latest-recipes.html",
        controller: 'LatRecController'
      }
    }
  })

  /* MY RECIPES */
  .state('app.myrecipes', {
    url: "/my-recipes",
    views: {
      'menuContent': {
        templateUrl: "templates/my-recipes.html",
        controller: 'MyRecController'
      }
    }
  })

  /* MEAL PLANNER */
  .state('app.planner', {
    url: "/planner",
    views: {
      'menuContent': {
        templateUrl: "templates/planner.html",
        controller: 'PlannerController'
      }
    }
  })

  /* SHOPPING LIST */
  .state('app.shoplist', {
    url: "/shopping-list",
    views: {
      'menuContent': {
        templateUrl: "templates/shop-list.html",
        controller: 'ShopListController'
      }
    }
  })

  /* LOGIN */
  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginController'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

};