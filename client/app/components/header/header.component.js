import template from './header.component.html';
import controller from './header.controller.js';
import './header.component.scss';

let headerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'headerController'
};
export default headerComponent;