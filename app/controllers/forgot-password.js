import Controller from '@ember/controller';

export default Controller.extend({
  email: '',

  queryParams: [
    { email: { type: 'string' } }
  ]
});
