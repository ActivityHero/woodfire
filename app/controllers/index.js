import Ember from 'ember';

export default Ember.Controller.extend({

  controllerWrapsModels: function() {
    return this.get('model.name').length;
  }.property('model.name')

});
