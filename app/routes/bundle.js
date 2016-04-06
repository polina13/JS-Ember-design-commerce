import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('bundle', params.bundle_id);
  },
  actions: {
    saveProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      console.log(params);
      var bundle = params.bundle;
      console.log(bundle);
      bundle.get('products').addObject(newProduct);
      newProduct.save().then(function() {
        return bundle.save();
      });
      this.transitionTo('pricing', params.bundle);
    },

  }
});
