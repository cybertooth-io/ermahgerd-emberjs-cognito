import { isNone } from '@ember/utils';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    setPassword(session, username, code, password) {
      session
        .resetPassword(username, code, password)
        .then(() => {
          this.transitionTo('login', { queryParams: { username: username } })
            .then(newRoute => {
              newRoute.get('notify').success('Now use your new password to sign in.', { closeAfter: null });
            })
        })
        .catch(response => this.get('notify').error(response.message));
      return false;
    }
  },

  model(params) {
    return hash({
      code: '',
      password: '',
      username: isNone(get(params, 'username')) ? '' : get(params, 'username')
    });
  },

  queryParams: {
    username: { refreshModel: false }
  },

  session: service()
});
