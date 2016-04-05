import Ember from 'ember';

export default Ember.Route.extend({
 model: function(params) {
   console.log("the params2", params);
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=f97432556c8946338d0017462353f4e0&latitude=' + params.latitude + '&longitude=' + params.longitude;
   console.log(url);
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
