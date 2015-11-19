import Ember from 'ember';

export default Ember.Object.extend({
  thisDoesThings: function() {
    return this.get('name') + ' is pretty cool!';
  }.property('name')
});
