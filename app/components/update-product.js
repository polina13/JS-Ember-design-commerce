import Ember from 'ember';

export default Ember.Component.extend({
  updateProductFormShow: false,

  actions: {
    showForm() {
      this.set('updateProductFormShow', true);
    },
    updateProduct(product) {
      var params = {
        productName: this.get('productName'),
        description: this.get('description'),
        price: this.get('price'),
        productImage: this.get('productImage'),
        recommendedProducts: this.get('recommendedProducts'),
        mediaType: this.get('mediaType'),
        product: this.get('product')
      };
      this.sendAction('updateProduct', product, params);
      this.set('updateProductFormShow', false);
    }
  }
});
