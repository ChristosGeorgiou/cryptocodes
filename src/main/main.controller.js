(function () {
    'use strict';

    angular
        .module('app')
        .controller("MainController", MainController);

    /* @ngInject */
    function MainController($state) {

        var vm = this;

        vm.last_game = localStorage.getItem("game");
        
        vm.NewGame = function () {
            $state.go("app.game", {
                seed: Math.floor(Math.random() * Math.pow(10,4)).toString(),
            });
        };

        vm.GoGame = function () {
            $state.go("app.game", {
                seed: vm.seed,
            });
        };


    }


} ());
