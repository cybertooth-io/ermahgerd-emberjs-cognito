import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Route from '@ember/routing/route';

export default class Protected extends Route.extend(AuthenticatedRouteMixin) {
  /**
   * Loading the `current-user` into the store; you can peek to get access to it.
   * @return {*|Promise} the `current-user` instance.
   */
  model() {
    return this.store.queryRecord('current-user', {
      include: '' +
        'roles' +
        ',sessions' +
        ''
    });
  }
}
