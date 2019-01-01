import { isNone } from '@ember/utils';
import { get } from '@ember/object';
import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {

  model(params) {
    return {
      password: '',
      username: isNone(get(params, 'username')) ? '' : get(params, 'username')
    }
  },

  queryParams: {
    username: { refreshModel: false }
  }
});
