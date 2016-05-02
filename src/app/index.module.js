/* global moment:false */
import { config } from './index.conf';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import {StolenBikesFeed} from './components/stolen-bikes-feed/stolen-bikes-feed-directive';

angular.module('peddlePedals', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr', 'firebase'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('stolenBikeFeed', StolenBikesFeed);
  
