import { action } from '@ember-decorators/object';
import { inject as service } from '@ember-decorators/service';
import Route from '@ember/routing/route';

/**
 * TODO: rename this route to `social-sites`
 */
export default class Attributes extends Route {
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
