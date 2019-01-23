import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    forgotPassword(session, username) {
      session
        .forgotPassword(username)
        .then(() => {
          this.transitionTo('reset-password', { queryParams: { username: username } })
            .then(newRoute => {
              newRoute.get('notify').success('Check your email for your password reset code.');
            });
        })
        .catch(response => this.get('notify').error(response.message));
      return false;
    }
  },

  model() {
    return hash({
      username: ''
    });
  }
});
