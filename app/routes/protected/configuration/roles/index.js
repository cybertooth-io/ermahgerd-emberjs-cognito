import { set } from '@ember/object';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default class Index extends Route {
  afterModel(resolvedModel) {
    set(resolvedModel, 'rolesCount', resolvedModel.roles.meta['record-count']);
  }

  model() {
    return hash({
      roles: this.store.query('role', { sort: 'name' })
    });
  }
}
