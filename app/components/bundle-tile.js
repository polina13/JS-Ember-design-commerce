import Ember from 'ember';

export default Ember.Component.extend({
  showBundleInformation: false,
  actions: {
    showInformation() {
      this.set('showBundleInformation', true);
    },
    deleteBundle(bundle) {
      if(confirm("Are you sure you want to delete this bundle?")) {
        this.sendAction('deleteBundle', bundle);
      }
    }
  }
});
