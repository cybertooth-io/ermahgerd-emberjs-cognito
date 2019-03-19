import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    changePassword(session, currentPassword, newPassword) {
      session
        .changePassword(currentPassword, newPassword)
        .then(() => {
          this.refresh();
          this.notify.success('Your password was updated successfully.');
        })
        .catch(response => this.notify.error(response.message));
      return false;
    }
  },

  model() {
    return hash({
      currentPassword: '',
      newPassword: ''
    })
  }
});
