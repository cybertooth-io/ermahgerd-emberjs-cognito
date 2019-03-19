import { hash } from 'rsvp';
import { get, set } from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(resolvedModel) {
    set(resolvedModel, 'usersCount', get(resolvedModel, 'users.meta.record-count'));
  },

  model() {
    return hash({
      users: this.store.query('user', {
        sort: 'email'
      })
    })
  }
});
