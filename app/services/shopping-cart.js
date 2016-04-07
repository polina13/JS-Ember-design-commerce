import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  fullCart: Ember.computed('items', function() {
    this.get('items.length', 2);
  }),
  add(item) {
    if(this.get('fullCart')) {
      alert('The cart is full. Remove an item to add another one.');
    } else {
      this.get('items').pushObject(item);
    }
  },
  remove(item) {
    this.get('items').removeObject(item);
  },
  includes(item) {
    return this.get('items').includes(item);
  }
});
