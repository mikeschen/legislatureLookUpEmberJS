import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    billLookup(params) {
      this.transitionTo('results', params.bill);
    },
    zipLookup(params) {
      console.log("ziplookup", params);
      this.transitionTo('zipcoderesults', params.latitude, params.longitude);
    }
  }
});
