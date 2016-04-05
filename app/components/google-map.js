import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(zip) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(zip.get('latitude'), zip.get('longitude')),
        zoom: 15
      };
      this.get('map').findMap(container, options);
    }
  }
});
