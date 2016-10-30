(function () {
  'use strict';

  angular
    .module('app')
    .controller("GameController", GameController);

  /* @ngInject */
  function GameController($timeout, WordsData, $stateParams, RandomService, GameService) {

    var vm = this;

    vm.game = {
      _config: {
        seed: $stateParams.seed,
        amount: 25,
        cards: {
          blue: 9,
          red: 8,
          black: 1,
          yellow: 7,
        }
      },
      cards: [],
    };

    vm.game.cards = GameService.Init(vm.game._config);

    vm.ShowCard = function (index) {
      vm.game.cards[index].flip = !vm.game.cards[index].flip;
    };

    vm._t=false;
    vm.ToggleAll = function () {
      vm.game.cards.forEach(function (c) {
        c.flip = !vm._t;
      });

      vm._t = !vm._t;
    };

  }


} ());
