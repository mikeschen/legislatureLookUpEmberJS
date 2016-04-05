import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:bill'});
  this.route('zipcoderesults', {path: '/zipcoderesults/:zip'});
  this.route('bill-detail', {path: '/results/:bill/bill-detail'});
});

export default Router;
