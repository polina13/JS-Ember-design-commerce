import Ember from 'ember';

export default Ember.Component.extend({
  updateBundleFormShow: false,

  actions: {
    showForm() {
      this.set('updateBundleFormShow', true);
    },
    updateBundle(bundle) {
      var params = {
        bundleName: this.get('bundleName'),
        description: this.get('description'),
        price: this.get('price'),
        bundleImage: this.get('bundleImage'),
        product: this.get('product')
      };
      this.sendAction('updateBundle', bundle, params);
      this.set('updateBundleFormShow', false);
    }
  }
});
