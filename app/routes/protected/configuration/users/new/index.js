import { action } from '@ember/object';
import { isBlank } from '@ember/utils';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default class Index extends Route {
  @action
  chooseRole(user, chosenRole) {
    if (isBlank(chosenRole)) {
      return true;
    }

    user.roles.pushObject(chosenRole);
    return true;
  }

  @action
  save(user) {
    user
      .save()
      .then((/*response*/) => {
        this.notify.success('Created.');
      })
      .catch((errors) => {
        console.error('???', errors);
        this.notify.error('Check for errors.');
      });
    return false;
  }

  model() {
    return hash({
      roles: this.modelFor('protected.configuration.users.new').roles,
      user: this.store.createRecord('user')
    });
  }
}
