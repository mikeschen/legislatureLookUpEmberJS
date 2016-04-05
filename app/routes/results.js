import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=f97432556c8946338d0017462353f4e0&query=' + params.bill;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
