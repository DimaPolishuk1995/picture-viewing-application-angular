angular.module('app.directives', [])

  .directive('whenScrolled', () => (scope, elm, attr) => {
    const raw = elm[0];
    elm.bind('scroll', () => {
      if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
        scope.$apply(attr.whenScrolled);
      }
    });
  })