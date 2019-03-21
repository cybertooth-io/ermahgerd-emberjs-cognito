import Controller from '@ember/controller';

export default class Login extends Controller {
  queryParams = [
    { username: { type: 'string' } }
  ];
}
