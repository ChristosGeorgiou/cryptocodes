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
            template: '<ui-view/>',
            controller: 'AppController',
            controllerAs: 'vm',
        });

        $stateProvider.state("app.home", {
            url: "/",
            templateUrl: 'src/home/home.view.html',
        });

        $stateProvider.state("app.help", {
            url: "/help",
            templateUrl: 'src/help/help.view.html',
        });

        $stateProvider.state("app.game", {
            url: "/game/:seed",
            params: {
                seed: Math.floor(Math.random() * Math.pow(10,4)).toString(),
            },
            templateUrl: 'src/game/game.view.html',
            controller: 'GameController',
            controllerAs: 'vm',
        });

    }

})();