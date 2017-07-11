import angular from 'angular';
import albumComponent from './album.component';

const albumModule = angular.module('album', [])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('album', {
      url: '/album/:id',
      template: '<album></album>'
    })
  })
  .component('album', albumComponent);
export default albumModule;