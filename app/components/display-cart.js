import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  itemsInCart: Ember.computed.alias('shoppingCart.items'),
  itemPrices: Ember.computed.mapBy('shoppingCart.items', 'price'),
  totalPrice: Ember.computed.sum('itemPrices')
});
