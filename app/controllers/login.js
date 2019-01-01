import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    login(session, username, password) {
      const notification = this.get('notify').info('Authenticating, please wait...');
      session.authenticate('authenticator:aws-amplify-authenticator', username, password)
        .finally(() => notification.set('visible', false));
      return false;
    }
  },

  session: service()
});
