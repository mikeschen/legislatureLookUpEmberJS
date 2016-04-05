import Ember from 'ember';

export default Ember.Route.extend({
  map: Ember.inject.service('google-map'),
  actions: {
    billLookup(params) {
      this.transitionTo('results', params.bill);
    },
    zipLookup(params) {
      console.log("ziplookup", params);
      this.transitionTo('zipcoderesults', params.latitude, params.longitude);
      var container = this.$('.map-display')[0];
      console.log("showMap", params);
      var options = {
        center: this.get('map').center('params.latitude', 'params.longitude'),
        zoom: 15
      };
      this.get('map').findMap(container, options);
    }
    },
});
