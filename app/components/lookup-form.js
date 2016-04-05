
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      var params = {
        longitude: this.get('longitude'),
        latitude: this.get('latitude')
      };
      this.sendAction('zipLookup', params);
    }
  }
});
