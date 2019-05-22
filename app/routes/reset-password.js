import { isNone } from '@ember/utils';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default class ResetPassword extends Route {
  queryParams = {
    username: { refreshModel: false }
  };
  @service session;

  @action
  setPassword(session, username, code, password) {
    session
      .resetPassword(username, code, password)
      .then(() => {
        this.transitionTo('login', { queryParams: { username: username } })
          .then(newRoute => {
            newRoute.notify.success('Now use your new password to sign in.', { closeAfter: null });
          })
      })
      .catch(response => this.notify.error(response.message));
    return false;
  }

  model(params) {
    return hash({
      code: '',
      password: '',
      username: isNone(params.username) ? '' : params.username
    });
  }
}
