import 'bootstrap-css-only';
import 'normalize.css';
import {appComponent} from './app.component';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ComponentsModule from './components/components';
import './directives/index'
import ServiceRequests from './services/request.js';

angular.module('app', [
  uiRouter,
  ComponentsModule.name,
  'app.directives'
])
  .component('app', appComponent)
  .service('serviceRequests', ServiceRequests);