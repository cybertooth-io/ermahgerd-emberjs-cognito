import { inject as service } from '@ember/service';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import Mixin from '@ember/object/mixin';

export default Mixin.create(DataAdapterMixin, {
  authorize(xhr) {
    if (this.get('session.isAuthenticated')) {
      const accessToken = this.get('session.data.authenticated.cognitoUser.accessToken');
      const idToken = this.get('session.data.authenticated.cognitoUser.idToken');

      xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);
      xhr.setRequestHeader('Identification', idToken);
    }
  },

  session: service()
});
