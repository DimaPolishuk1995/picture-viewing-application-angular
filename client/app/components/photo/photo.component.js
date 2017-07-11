import template from './photo.component.html';
import controller from './photo.controller.js';
import './photo.component.scss';

let photoComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'photoController'
};
export default photoComponent;