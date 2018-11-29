/**
 * Inject the session into every controller in this application.
 *
 * From your route-templates you can use `{{session.isAuthenticated}}` to test when the browser user
 * has authenticated.
 *
 * Manually inject this service into your route and components as necessary, for example:
 * ```javascript
 * import { inject as service } from '@ember/service';
 * session: service()
 * ```
 *
 * @param application your EmberJs application that is starting up and initializing.
 */
export function initialize(application) {
  application.inject('controller', 'session', 'service:session');
}

export default {
  initialize
};
