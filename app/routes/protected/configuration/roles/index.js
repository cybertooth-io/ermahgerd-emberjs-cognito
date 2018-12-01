import { get, set } from '@ember/object';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(resolvedModel) {
    set(resolvedModel, 'rolesCount', get(resolvedModel, 'roles.meta.record-count'));
  },

  model() {
    return hash({
      roles: this.get('store').query('role', { sort: 'name' })
    });
  }
});
