import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    remove(item) {
      this.get('shoppingCart').remove(item);
    },
    deleteProduct(product) {
      if(confirm("Are you sure you want to delete this product?")) {
        this.sendAction('deleteProduct', product);
      }
    },
    updateProduct(product, params) {
      this.sendAction('updateProduct', product, params);
    },
  }
});
