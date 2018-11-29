import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    logout(session, /*event*/) {
      session.invalidate();
    }
  },

  session: service()
});
