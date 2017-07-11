import angular from 'angular';
import headerComponent from './header.component';

const headerModule = angular.module('header', [])
  .component('header', headerComponent);
export default headerModule;