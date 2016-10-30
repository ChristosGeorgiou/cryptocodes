(function () {
    'use strict';

    angular
        .module('app')
        .factory('RandomService', RandomService);

    /* @ngInject */
    function RandomService() {

        var service = {
            seed: Math.floor(Math.random() * 10 * 8),
            Get: Get,
        };

        return service;

        function Get() {
            var x = Math.sin(service.seed++);
            return x - Math.floor(x);
        }
    }

} ());
