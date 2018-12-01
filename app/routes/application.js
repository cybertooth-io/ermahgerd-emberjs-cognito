import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import Route from '@ember/routing/route';

export default Route.extend(ApplicationRouteMixin, {
  actions: {
    error() {
      console.error('SOME ERROR', arguments);
      return true;
    }
  },

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
});
