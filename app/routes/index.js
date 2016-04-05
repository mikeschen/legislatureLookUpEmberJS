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
      new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
      }
    },
});
