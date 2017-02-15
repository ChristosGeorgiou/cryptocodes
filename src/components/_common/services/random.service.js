(function () {
  angular
    .module('app')
    .factory('RandomService', RandomService);

  /* @ngInject */
  function RandomService($log) {
    const service = {
      seed: Math.floor(Math.random() * 10 * 8),
      Get,
    };

    return service;

    function Get() {
      $log.debug('service.seed', service.seed);
      const x = Math.sin(service.seed += 1);
      return x - Math.floor(x);
    }
  }
}());
