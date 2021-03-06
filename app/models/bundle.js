import DS from 'ember-data';

export default DS.Model.extend({
  bundleName: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  bundleImage: DS.attr(),
  products: DS.hasMany('product', {async: true})
});
