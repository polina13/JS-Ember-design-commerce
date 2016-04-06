import Ember from 'ember';

export default Ember.Component.extend({
  addNewBundleForm: false,

  actions: {
    showForm() {
      this.set('addNewBundleForm', true);
    },
    saveBundle() {
      var params = {
        bundleName: this.get('bundleName'),
        bundleImage: this.get('bundleImage'),
        description: this.get('description'),
        price: this.get('price')
      };
      this.set('addNewBundleForm', false);
      this.sendAction('saveBundle', params);
    }
  }
});
