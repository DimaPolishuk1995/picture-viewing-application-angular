import template from './album.component.html';
import controller from './album.controller.js';

let albumComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'albumController'
};
export default albumComponent;