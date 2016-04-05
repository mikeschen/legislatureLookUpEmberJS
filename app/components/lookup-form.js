
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      var params = {
        longitude: this.get('longitude'),
        latitude: this.get('latitude'),

      };
      console.log("params", params);
      this.sendAction('zipLookup', params);
    }
  }
});
