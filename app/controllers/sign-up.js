import { inject as service } from '@ember/service';
import Auth from '@aws-amplify/auth';
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    signUp(username, password, passwordConfirmation, givenName, familyName) {
      this.get('awsAmplifyAuthService', username, password, {
        attributes: {
          email: username,
          family_name: familyName,
          given_name: givenName
        }
      });
      Auth.signUp({
        username,
        password,
        attributes: {
          email: username,
          family_name: familyName,
          given_name: givenName
        },
        validationData: []  //optional
      })
        .then((/*data*/) => {
          this.get('notify').success('Confirm your email address and then sign in.');
        })
        .catch(err => {
          this.get('notify').error('All fields are required.  For now, check your console for errors.');
          console.error(err);
        });
      return false;
    }
  },

  awsAmplifyAuthService: service()
});
