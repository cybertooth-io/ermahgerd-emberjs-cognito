import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: [
    { username: { type: 'string' } }
  ]
});
