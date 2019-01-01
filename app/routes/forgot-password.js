import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    forgotPassword(username) {
      this.get('awsAmplifyAuthService')
        .forgotPassword(username)
        .then(() => {
          this.transitionTo('reset-password', { queryParams: { username: username } })
            .then(newRoute => {
              newRoute.get('notify').success('Check your email for your password reset code.');
            });
        })
        .catch(response => {
          console.error('Error', response);
          this.get('notify').warning('That email address does not seem to match anything we have on file.');
        });
      return false;
    }
  },

  /**
   * @see `ember-simple-auth-aws-amplify`
   */
  awsAmplifyAuthService: service(),

  model() {
    return hash({
      username: ''
    });
  }
});
