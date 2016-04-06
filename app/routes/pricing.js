import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      bundles: this.store.findAll('bundle'),
      products: this.store.findAll('product')
    });
  },
  
});
