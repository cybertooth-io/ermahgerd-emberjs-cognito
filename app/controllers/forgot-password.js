import Controller from '@ember/controller';

export default class ForgotPassword extends Controller {
  email = '';

  queryParams = [
    { email: { type: 'string' } }
  ]
}
