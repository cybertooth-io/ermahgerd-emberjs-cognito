import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import { isNone } from '@ember/utils';
import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default class Login extends Route.extend(UnauthenticatedRouteMixin) {
  queryParams = {
    username: { refreshModel: false }
  };
  @service session;

  @action
  completePassword(authenticationState, newPassword, additionalAttributes = {}/*, submitEvent*/) {
    this.session
      .completePassword(authenticationState, newPassword, additionalAttributes)
      .then(authenticationState => {
        if (authenticationState.get('mfaRequired?')) {
          set(this, 'controller.model.authenticationState', authenticationState);
        }
      })
      .catch(response => this.notify.error(response.message));
    return false;
  }

  @action
  confirmSignIn(authenticationState, code) {
    this.session
      .confirmSignIn(authenticationState, code)
      .catch(response => this.notify.error(response.message));
    return false;
  }

  @action
  signIn(username, password) {
    const notification = this.notify.info('Signing you in...');
    this.session
      .signIn(username, password)
      .then(authenticationState => {
        if (authenticationState.get('mfaRequired?') || authenticationState.get('newPasswordRequired?')) {
          set(this, 'controller.model.authenticationState', authenticationState);
        }
      })
      .catch(response => {
        notification.set('visible', false); // TODO: eventually this can be fixed if the notify is objectified
        this.notify.error(response.message);
      });
    return false;
  }

  model(params) {
    return {
      additionalAttributes: {},
      authenticationState: {},  // will be set during sign in if MFA is enabled
      mfaCode: '',
      newPassword: '',
      password: '',
      username: isNone(params.username) ? '' : params.username
    }
  }
}
