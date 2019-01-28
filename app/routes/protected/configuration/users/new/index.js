import { isBlank } from '@ember/utils';
import { get } from '@ember/object';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    chooseRole(user, chosenRole) {
      if (isBlank(chosenRole)) {
        return true;
      }

      user.get('roles').pushObject(chosenRole);
      return true;
    },

    save(user) {
      user
        .save()
        .then((/*response*/) => {
          this.get('notify').success('Created.');
        })
        .catch((errors) => {
          console.error('???', errors);
          this.get('notify').error('Check for errors.');
        });
      return false;
    }
  },

  model() {
    return hash({
      roles: get(this.modelFor('protected.configuration.users.new'), 'roles'),
      user: this.get('store').createRecord('user')
    });
  }
});
