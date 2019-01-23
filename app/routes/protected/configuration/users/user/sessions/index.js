import { hash } from 'rsvp';
import { get, set } from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(resolvedModel) {
    set(resolvedModel, 'sessionsCount', get(resolvedModel, 'sessions.meta.record-count'));
  },

  model() {
    const user = this.modelFor('protected.configuration.users.user');
    return hash({
      sessions: this.get('store').query('session', {
        filter: { user: user.get('id') },
        sort: '' +
          '-created-at'
      })
    });
  }
});
