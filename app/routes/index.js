import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    billLookup(params) {
      this.transitionTo('results', params.bill);
    },
    zipLookup(params) {
      this.transitionTo('zipcoderesults', params.zip);
    }
  }
});
