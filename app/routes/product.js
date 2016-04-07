import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  actions: {
    deleteProduct(product) {
      product.destroyRecord();
      this.transitionTo('pricing');
    },

    updateProduct(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          product.set(key, params[key]);
        }
      });
      product.save();
      this.transitionTo('pricing');
    },
    saveProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('pricing');
    }
  }
});
