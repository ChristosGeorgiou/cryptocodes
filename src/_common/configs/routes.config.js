(function () {
    'use strict';

    angular
        .module('app')
        .config(RoutesConfig);

    /* @ngInject */
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider.state("app", {
            abstract: true,
            templateUrl: 'src/_common/views/layout.html',
            controller: 'AppController',
            controllerAs: 'vm',
        });

        $stateProvider.state("app.main", {
            url: "/",
            templateUrl: 'src/main/main.view.html',
            controllerAs: 'vm',
            controller: 'MainController',
        });

        $stateProvider.state("app.help", {
            url: "/help",
            templateUrl: 'src/help/help.view.html',
        });

        $stateProvider.state("app.game", {
            url: "/game/:seed",
            params: {
                seed: null,
            },
            templateUrl: 'src/game/game.view.html',
            controller: 'GameController',
            controllerAs: 'vm',
        });

    }

})();