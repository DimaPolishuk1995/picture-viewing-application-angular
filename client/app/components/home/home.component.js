import template from './home.component.html';
import controller from './home.controller.js';
import './home.component.scss';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'homeController'
};
export default homeComponent;