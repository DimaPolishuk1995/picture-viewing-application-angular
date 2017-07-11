import angular from 'angular';
import homeComponent from './home.component';

const homeModule = angular.module('home', [])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      url: '/',
      template: '<home></home>'
    })
  })
  .component('home', homeComponent);


export default homeModule;
