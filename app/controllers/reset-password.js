import Controller from '@ember/controller';

export default class ResetPassword extends Controller {
  queryParams = [
    { username: { type: 'string' } }
  ];

  username = '';
}
