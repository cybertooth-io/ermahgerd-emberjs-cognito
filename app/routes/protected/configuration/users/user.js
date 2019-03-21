import Route from '@ember/routing/route';

export default class User extends Route {
  beforeModel() {
    const params = this.paramsFor('protected.configuration.users.user');
    return this.store.query('user', {
      filter: { id: params.user_id },
      include: '' +
        'roles' +
        ',sessions' +
        ''
    })
  }
}
