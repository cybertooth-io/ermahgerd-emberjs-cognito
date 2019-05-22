import { action } from '@ember/object';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import Route from '@ember/routing/route';

export default class Application extends Route.extend(ApplicationRouteMixin) {
  @action
  error() {
    console.error('Application Error Substate', arguments);
    return true;
  }

  @action
  logout(session) {
    this.store
      .peekAll('current-user')
      .firstObject
      .signOut()
      .finally(() => this.store.unloadAll('current-user'))
      .finally(() => session.invalidate())
  }

  /**
   * I am overriding the `ember-simple-auth` default behaviour from the `ApplicationRouteMixin` so that it
   * always transitions rather than doing a full page refresh.
   *
   * I do not like the full page refresh.
   * @override
   */
  sessionInvalidated() {
    this.transitionTo('index');
  }
}
