import template from './footer.component.html';
import controller from './footer.controller.js';
import './footer.component.scss';

let footerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'footerController'
};
export default footerComponent;