(function () {
  angular
    .module('app')
    .controller('GameController', GameController);

  /* @ngInject */
  function GameController(
    $timeout, WordsData, $stateParams,
    RandomService, GameService, $interval) {
    const vm = this;

    const aSeed = parseInt($stateParams.seed, 10);

    localStorage.setItem('game', aSeed);

    vm.game = {
      config: {
        seed: aSeed,
        timer: 90,
        cards: {
          blue: 9,
          red: 8,
          black: 1,
          yellow: 7,
        },
      },
      cards: [],
      rounds: [{
        team: 'blue',
        team_label: 'ΜΠΛΕ',
      }, {
        team: 'red',
        team_label: 'ΚΟΚΚΙΝΗ',
      }],
    };

    vm.timer = vm.game.config.timer;

    vm.stop = function () {
      vm.pause();
      vm.timer = vm.game.config.timer;
    };

    vm.pause = function () {
      if (vm.timer_interval) {
        $interval.cancel(vm.timer_interval);
        vm.timer_interval = null;
      }
    };

    vm.start = function () {
      vm.timer_interval = $interval(() => {
        vm.timer -= 1;
        if (vm.timer <= 0) {
          $interval.cancel(vm.timer_interval);
          vm.timer_interval = null;
        }
      }, 1000);
    };

    vm.game.cards = GameService.Init(vm.game.config);

    vm.ShowCard = function (index) {
      vm.game.cards[index].flip = !vm.game.cards[index].flip;
    };

    vm.t = false;
    vm.ToggleAll = function () {
      vm.game.cards.forEach((c) => {
        c.flip = !vm.t;
      });

      vm.t = !vm.t;
    };
  }
}());
