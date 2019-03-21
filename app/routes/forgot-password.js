import { hash } from 'rsvp';
import { action } from '@ember-decorators/object';
import { getWithDefault } from '@ember/object';
import Route from '@ember/routing/route';

export default class ForgotPassword extends Route {
  queryParams = {
    email: { refreshModel: true }
  };

  @action
  forgotPassword(session, username) {
    session
      .forgotPassword(username)
      .then(() => {
        this.transitionTo('reset-password', { queryParams: { username: username } })
          .then(newRoute => {
            newRoute.notify.success('Check your email for your password reset code.');
          });
      })
      .catch(response => this.notify.error(response.message));
    return false;
  }

  model(params) {
    return hash({
      username: getWithDefault(params, 'email', '')
    });
  }
}
