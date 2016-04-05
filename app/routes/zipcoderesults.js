import config from '../config/environment';
import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var key = config.myApiKey;
   console.log("the params2", params);
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=' +key+ '&latitude=' + params.latitude + '&longitude=' + params.longitude;
   console.log(url);
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
