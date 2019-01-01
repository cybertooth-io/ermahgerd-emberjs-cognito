import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    changePassword(currentPassword, newPassword) {
      this.get('awsAmplifyAuthService')
        .changePassword(currentPassword, newPassword)
        .then(() => {
          this.transitionTo('protected.index')
            .then(newRoute => newRoute.get('notify').success('Your password was updated successfully.'));
        })
        .catch(response => {
          this.get('notify').error('Your password cannot be changed.');
          console.warn('ERRORS', response);
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
      currentPassword: '',
      newPassword: ''
    })
  }
});
