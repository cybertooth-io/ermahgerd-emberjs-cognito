import { action } from '@ember-decorators/object';
import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default class SignUp extends Route.extend(UnauthenticatedRouteMixin) {
  @action
  signUp(session, username, password, passwordConfirmation, givenName, familyName) {
    session.signUp({
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
        this.notify.success('Confirm your email address and then sign in.');
      })
      .catch(response => this.notify.error(response.message));
    return false;
  }

  model() {
    return {
      familyName: '',
      givenName: '',
      password: '',
      passwordConfirmation: '',
      username: ''
    };
  }
}
