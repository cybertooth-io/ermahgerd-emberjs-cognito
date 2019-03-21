import { hash } from 'rsvp';
import { set } from '@ember/object';
import Route from '@ember/routing/route';

export default class Index extends Route {
  afterModel(resolvedModel) {
    set(resolvedModel, 'sessionsCount', resolvedModel.sessions.meta['record-count']);
  }

  model() {
    const user = this.modelFor('protected.configuration.users.user');
    return hash({
      sessions: this.store.query('session', {
        filter: { user: user.id },
        sort: '' +
          '-created-at'
      })
    });
  }
}
