(function () {
  angular
        .module('app')
        .config(LocationConfig);

    /* @ngInject */
  function LocationConfig($locationProvider) {
    $locationProvider.html5Mode(true);
  }
}());
