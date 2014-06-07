'use strict';

/**
 * @ngdoc function
 * @name swDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swDashboardApp
 */
angular.module('swDashboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
