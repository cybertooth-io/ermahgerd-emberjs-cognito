import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class Profile extends Route {
  @service session;

  @action
  update(session, subjectAttributes) {
    session
      .updateUserAttributes(subjectAttributes)
      .then(() => this.notify.success('Your profile was updated successfully.'))
      .catch(response => this.notify.error(response.message));
    return false;
  }

  model() {
    return this.session.writableAttributes;
  }
}
