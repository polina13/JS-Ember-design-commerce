import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('pricing');
  this.route('product', {path: '/product/:product_id'});
});

export default Router;
