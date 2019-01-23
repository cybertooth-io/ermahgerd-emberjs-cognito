import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    update(session, subjectAttributes) {
      session
        .updateUserAttributes(subjectAttributes)
        .then(() => this.get('notify').success('Your profile was updated successfully.'))
        .catch(response => this.get('notify').error(response.message));
      return false;
    }
  },

  model() {
    return this.get('session.writableAttributes');
  },

  session: service(),
});
