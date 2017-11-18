(function () {
    'use strict';

    angular
        .module('app')
        .factory('GameService', GameService);

    /* @ngInject */
    function GameService(RandomService, WordsData) {

        var service = {
            _game: null,
            Init: Init,
        };

        return service;

        function Init(config) {

            service._game = {};
            service._game._config = config;
            service._game.cards = BuildCards();

            return service._game.cards;
        }

        function BuildCards() {

            RandomService.seed = angular.copy(service._game._config.seed);

            var _words = _shuffle(angular.copy(WordsData));

            var _cards = [];
            _cards = _cards.concat(GenerateCards(_words, service._game._config.cards.red, "RED"));
            _cards = _cards.concat(GenerateCards(_words, service._game._config.cards.blue, "BLUE"));
            _cards = _cards.concat(GenerateCards(_words, service._game._config.cards.yellow, "YELLOW"));
            _cards = _cards.concat(GenerateCards(_words, service._game._config.cards.black, "BLACK"));

            return _shuffle(_cards);
        }

        function GenerateCards(words, amount, type) {

            var _cssclasses = {
                BLUE: "card-blue",
                RED: "card-red",
                BLACK: "card-black",
                YELLOW: "card-yellow",
            };
            var _answers = {
                BLUE: "ΜΠΛΕ",
                RED: "ΚΟΚΚΙΝΗ",
                BLACK: "ΔΟΛΟΦΟΝΟΣ",
                YELLOW: "ΑΘΩΟΣ",
            };
            var _icons = {
                BLUE: "user-circle",
                RED: "user-circle-o",
                BLACK: "user-secret",
                YELLOW: "users",
            };

            var _cards = [];
            for (var k = 0; k < amount; k++) {
                _cards.push({
                    word: words.pop(),
                    answer: _answers[type],
                    class: _cssclasses[type],
                    icon: _icons[type],
                    type: type,
                });
            }
            return _cards;
        }

        function _shuffle(arr) {
            var j, x, i;
            for (i = arr.length; i; i--) {
                j = Math.floor(RandomService.Get() * i);
                x = arr[i - 1];
                arr[i - 1] = arr[j];
                arr[j] = x;
            }
            return arr;
        }
    }

}());