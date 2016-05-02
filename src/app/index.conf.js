export function config ($mdThemingProvider) {
    'ngInject';
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
      .accentPalette('blue-grey')
      .backgroundPalette('grey')
      .warnPalette('pink');
}