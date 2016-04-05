import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(params) {
      var container = this.$('.map-display')[0];
      console.log("showMap", params);
      var options = {
        center: this.get('map').center('params.latitude', 'params.longitude'),
        zoom: 15
      };
      this.get('map').findMap(container, options);
    }
  }
});
