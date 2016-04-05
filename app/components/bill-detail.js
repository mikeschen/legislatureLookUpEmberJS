import Ember from 'ember';

export default Ember.Component.extend({
  addMoreInfo: false,
  actions: {
    infoFormShow() {
      this.set('addMoreInfo', true);
    }
  }
});
