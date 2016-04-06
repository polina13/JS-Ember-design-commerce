import Ember from 'ember';

export default Ember.Component.extend({
  showBundleInformation: false,
  actions: {
    showInformation() {
      this.set('showBundleInformation', true);
    },
  }
});
