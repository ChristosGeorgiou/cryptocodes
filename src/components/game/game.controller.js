(function () {
  'use strict';

  angular
    .module('app')
    .controller("GameController", GameController);

  /* @ngInject */
  function GameController($timeout, WordsData, $stateParams, RandomService, GameService, $interval) {

    var vm = this;

    var _seed = parseInt($stateParams.seed);

    localStorage.setItem("game", _seed);

    vm.game = {
      _config: {
        seed: _seed,
        timer:90,
        cards: {
          blue: 9,
          red: 8,
          black: 1,
          yellow: 7,
        }
      },
      cards: [],
      rounds: [{
        team: "blue",
        team_label: "ΜΠΛΕ",
      }, {
        team: "red",
        team_label: "ΚΟΚΚΙΝΗ",
      }],
    };

    vm.timer = vm.game._config.timer;

    vm.stop = function () {
      vm.pause();
      vm.timer = vm.game._config.timer;
    }

    vm.pause = function () {
      if (vm._timer_interval) {
        $interval.cancel(vm._timer_interval);
        vm._timer_interval = null;
      }
    }

    vm.start = function () {
      vm._timer_interval = $interval(function () {
        vm.timer--;
        if (vm.timer <= 0) {
          $interval.cancel(vm._timer_interval);
          vm._timer_interval = null;
        }
      }, 1000);
    }

    vm.game.cards = GameService.Init(vm.game._config);

    vm.ShowCard = function (index) {
      vm.game.cards[index].flip = !vm.game.cards[index].flip;
    };

    vm._t = false;
    vm.ToggleAll = function () {
      vm.game.cards.forEach(function (c) {
        c.flip = !vm._t;
      });

      vm._t = !vm._t;
    };

  }


} ());
