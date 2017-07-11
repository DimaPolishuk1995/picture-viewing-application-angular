import angular from 'angular';
import photoComponent from './photo.component';

const photoModule = angular.module('photo', [])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('photo', {
      url: '/photo/:id',
      template: '<photo></photo>'
    })
  })
  .component('photo', photoComponent);
export default photoModule;