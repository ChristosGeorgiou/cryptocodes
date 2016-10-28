(function () {
    'use strict';

    angular
        .module('app', [
            'ui.router',
        ])
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.html5Mode(true);
        }])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider.state("app", {
                abstract: true,
                template: '<ui-view/>',
                controller: 'AppController',
                controllerAs: 'vm',
            });

            $stateProvider.state("app.home", {
                url: "/",
                templateUrl: 'src/home/home.view.html',
            });

            $stateProvider.state("app.game", {
                url: "/game/:seed",
                params: {
                    seed: Math.floor((Math.random() * 9999) + 1000).toString(),
                },
                templateUrl: 'src/game/game.view.html',
                controller: 'GameController',
                controllerAs: 'vm',
            });

        }]);

})();