'use strict';

/**
 * @ngdoc function
 * @name swDashboardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swDashboardApp
 */
angular.module('swDashboardApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
