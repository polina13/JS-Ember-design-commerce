import DS from 'ember-data';

export default DS.Model.extend({
  productName: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('string'),
  productImage: DS.attr('string'),
  mediaType: DS.attr('string'),
  recommendedProducts: DS.attr('string'),
  bundle: DS.belongsTo('bundle', {async: true}),
  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.items.[]', function() {
    return this.get('shoppingCart').includes(this);
  })
});
