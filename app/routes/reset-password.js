import { isNone } from '@ember/utils';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    setPassword(username, code, password) {
      this.get('awsAmplifyAuthService')
        .forgotPasswordSubmit(username, code, password)
        .then(() => {
          this.transitionTo('login', { queryParams: { username: username } })
            .then(newRoute => {
              newRoute.get('notify').success('Now use your new password to sign in.');
            })
        })
        .catch(response => {
          console.warn('Error', response);
          this.get('notify').error('Your password could not be set.');
        });
      return false;
    }
  },

  /**
   * @see `ember-simple-auth-aws-amplify`
   */
  awsAmplifyAuthService: service(),

  model(params) {
    return hash({
      code: '',
      password: '',
      username: isNone(get(params, 'username')) ? '' : get(params, 'username')
    });
  },

  queryParams: {
    username: { refreshModel: false }
  }
});
