import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { getOwner } from '@ember/application';
import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    update(subjectAttributes) {
      this.get('awsAmplifyAuthService')
        .updateUserAttributes(subjectAttributes)
        .then(() => {
          getOwner(this).lookup('session:main').restore();  // TODO: NOT LOVING THIS
          this.get('notify').success('Your profile was updated successfully.');
        })
        .catch((response) => {
          console.error('Error', response);
          this.get('notify').error('Failed to update your profile.');
        });
      return false;
    }
  },

  /**
   * @see `ember-simple-auth-aws-amplify`
   */
  awsAmplifyAuthService: service(),

  model() {
    return hash({
      family_name: this.get('session.data.authenticated.cognitoUser.attributes.family_name'),
      given_name: this.get('session.data.authenticated.cognitoUser.attributes.given_name')
    });
  },

  session: service()
});
