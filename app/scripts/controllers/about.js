'use strict';

/**
 * @ngdoc function
 * @name pizzaQuestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pizzaQuestApp
 */
angular.module('pizzaQuestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
