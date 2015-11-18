import Ember from 'ember';
import Sample from '../models/sample';

export default Ember.Route.extend({
  model: function() {
    return Sample.create({ name: 'Sample Name' });
  }
});
