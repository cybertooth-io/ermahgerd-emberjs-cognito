import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Route from '@ember/routing/route';

export default Route.extend(AuthenticatedRouteMixin, {
  /**
   * Loading the `current-user` into the store; you can peek to get access to it.
   * @return {*|Promise} the `current-user` instance.
   */
  model() {
    return this.get('store').queryRecord('current-user', {
      include: '' +
        'roles' +
        ',sessions' +
        ''
    });
  }
});
