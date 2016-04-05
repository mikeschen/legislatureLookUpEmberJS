import Ember from 'ember';

export default Ember.Component.extend({
  fullName: Ember.computed('bill.sponsor.title', 'bill.sponsor.first_name', 'bill.sponsor.last_name', function(){
    return this.get('bill.sponsor.title') + '. ' + this.get('bill.sponsor.first_name') + ' ' + this.get('bill.sponsor.last_name');
  }),
  addMoreInfo: false,
  actions: {
    infoFormShow() {
      this.set('addMoreInfo', true);
    }
  }
});
