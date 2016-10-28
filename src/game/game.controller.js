(function () {
  'use strict';

  angular
    .module('app')
    .controller("GameController", GameController);

  /* @ngInject */
  function GameController(WordsData, $stateParams) {

    var vm = this;
    var seed = $stateParams.seed;

    vm.CardTypes = {
      BLU: "ΜΠΛΕ ΟΜΑΔΑ",
      RED: "ΚΟΚΚΙΝΗ ΟΜΑΔΑ",
      BRN: "ΔΟΛΟΦΟΝΟΣ",
      NEU: "ΑΘΩΟΣ",
    };

    vm.CardClasses = {
      BLU: "card-blue",
      RED: "card-red",
      BRN: "card-burn",
      NEU: "card-neutral",
    };

    vm.ShowCard = function (index) {
      vm.cards[index].is_shown = !vm.cards[index].is_shown;

      if (vm.cards[index].is_shown) {
        vm.cards[index].class = vm.CardClasses[vm.cards[index].type];
      }
      else {
        vm.cards[index].class = null;
      }
    };

    vm.ToggleAll = function () {
      vm.cards.forEach(function (c) {
        c.is_shown = true;
        c.class = vm.CardClasses[c.type];
      });
    };

    function random() {
      var x = Math.sin(seed++);
      return x - Math.floor(x);
    }

    function shuffle(a) {
      var j, x, i;
      for (i = a.length; i; i--) {
        j = Math.floor(random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
      }
      return a;
    }

    shuffle(WordsData);

    var _words = WordsData.splice(0, 25);

    var _data = [];
    for (var i = 0; i < 9; i++) {
      _data.push({
        word: _words[i],
        type: "BLU",
        is_shown: false,
      });
    }

    for (var j = 0; j < 8; j++) {
      _data.push({
        word: _words[9 + j],
        type: "RED",
        is_shown: false,
      });
    }

    for (var k = 0; k < 7; k++) {
      _data.push({
        word: _words[18 + k],
        type: "NEU",
        is_shown: false,
      });
    }

    _data.push({
      word: _words[24],
      type: "BRN",
      is_shown: false,
    });


    vm.cards = shuffle(_data);

  }

} ());
