import { get } from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    const params = this.paramsFor('protected.configuration.users.user');
    return this.get('store').query('user', {
      filter: { id: get(params, 'user_id') },
      include: '' +
        'roles' +
        ',sessions' +
        ''
    })
  }
});
