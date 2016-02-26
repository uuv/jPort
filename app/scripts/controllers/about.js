'use strict';

/**
 * @ngdoc function
 * @name jpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jpApp
 */
angular.module('jpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
