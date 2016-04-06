import Ember from 'ember';

export default Ember.Component.extend({
  addNewProductForm: false,
  actions: {
    newProductForm(){
      this.set('addNewProductForm', true);
    },
    saveProduct() {
      var params = {
        productName: this.get('productName'),
        price: this.set('price', "na"),
        mediaType: this.get('mediaType'),
        description: this.get('description'),
        productImage: this.set('productImage', "na"),
        recommendedProducts: this.set('recommendedProducts', "na"),
        bundle: this.get('bundle')
      };
      console.log(params.bundle);
      this.set('addNewProductForm', false);
      this.sendAction('saveProduct', params);
    }
  }
});
