import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      bundles: this.store.findAll('bundle'),
      products: this.store.findAll('product')
    });
  },

  actions: {
    deleteBundle(bundle) {
      var product_deletions = bundle.get('products').map(function(product) {
        return product.destroyRecord();
      });
      Ember.RSVP.all(product_deletions).then(function() {
        return bundle.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
