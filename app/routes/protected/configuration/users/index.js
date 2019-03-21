import { hash } from 'rsvp';
import { set } from '@ember/object';
import Route from '@ember/routing/route';

export default class Index extends Route {
  afterModel(resolvedModel) {
    set(resolvedModel, 'usersCount', resolvedModel.users.meta['record-count']);
  }

  model() {
    return hash({
      users: this.store.query('user', {
        sort: 'email'
      })
    })
  }
}
