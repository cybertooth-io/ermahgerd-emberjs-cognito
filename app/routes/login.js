import { inject as service } from '@ember/service';
import { isNone } from '@ember/utils';
import { get, set } from '@ember/object';
import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  actions: {
    completePassword(authenticationState, newPassword, additionalAttributes = {}/*, submitEvent*/) {
      this.get('session')
        .completePassword(authenticationState, newPassword, additionalAttributes)
        .then(authenticationState => {
          if (authenticationState.get('mfaRequired?')) {
            set(this, 'controller.model.authenticationState', authenticationState);
          }
        })
        .catch(response => this.get('notify').error(response.message));
      return false;
    },

    confirmSignIn(authenticationState, code) {
      this.get('session')
        .confirmSignIn(authenticationState, code)
        .catch(response => this.get('notify').error(response.message));
      return false;
    },

    signIn(username, password) {
      const notification = this.get('notify').info('Signing you in...');
      this.get('session')
        .signIn(username, password)
        .then(authenticationState => {
          if (authenticationState.get('mfaRequired?') || authenticationState.get('newPasswordRequired?')) {
            set(this, 'controller.model.authenticationState', authenticationState);
          }
        })
        .catch(response => {
          notification.set('visible', false);
          this.get('notify').error(response.message);
        });
      return false;
    }
  },

  model(params) {
    return {
      additionalAttributes: {},
      authenticationState: {},  // will be set during sign in if MFA is enabled
      mfaCode: '',
      newPassword: '',
      password: '',
      username: isNone(get(params, 'username')) ? '' : get(params, 'username')
    }
  },

  queryParams: {
    username: { refreshModel: false }
  },

  session: service()
});
