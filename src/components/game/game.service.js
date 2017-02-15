(function () {
  angular
        .module('app')
        .factory('GameService', GameService);

    /* @ngInject */
  function GameService(RandomService, WordsData) {
    const service = {
      game: null,
      Init,
    };

    return service;

    function Init(config) {
      service.game = {};
      service.game.config = config;
      service.game.cards = BuildCards();

      return service.game.cards;
    }

    function BuildCards() {
      RandomService.seed = angular.copy(service.game.config.seed);

      const words = shuffle(angular.copy(WordsData));

      let cards = [];
      cards = cards.concat(GenerateCards(words, service.game.config.cards.red, 'RED'));
      cards = cards.concat(GenerateCards(words, service.game.config.cards.blue, 'BLUE'));
      cards = cards.concat(GenerateCards(words, service.game.config.cards.yellow, 'YELLOW'));
      cards = cards.concat(GenerateCards(words, service.game.config.cards.black, 'BLACK'));

      return shuffle(cards);
    }

    function GenerateCards(words, amount, type) {
      const cssclasses = {
        BLUE: 'card-blue',
        RED: 'card-red',
        BLACK: 'card-black',
        YELLOW: 'card-yellow',
      };
      const answers = {
        BLUE: 'ΜΠΛΕ ΟΜΑΔΑ',
        RED: 'ΚΟΚΚΙΝΗ ΟΜΑΔΑ',
        BLACK: 'ΔΟΛΟΦΟΝΟΣ',
        YELLOW: 'ΑΘΩΟΣ',
      };
      const icons = {
        BLUE: 'user-circle',
        RED: 'user-circle-o',
        BLACK: 'user-secret',
        YELLOW: 'users',
      };

      const cards = [];
      for (let k = 0; k < amount; k += 1) {
        cards.push({
          word: words.pop(),
          answer: answers[type],
          class: cssclasses[type],
          icon: icons[type],
          type,
        });
      }
      return cards;
    }

    function shuffle(arr) {
      let j;
      let x;
      let i;
      for (i = arr.length; i; i -= 1) {
        j = Math.floor(RandomService.Get() * i);
        x = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = x;
      }
      return arr;
    }
  }
}());
