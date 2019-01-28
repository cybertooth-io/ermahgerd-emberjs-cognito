import { collectionAction } from 'ember-api-actions';
import BaseModel from 'ember-cybertooth-base-model/models/-base';
import DS from 'ember-data';

export default BaseModel.extend({
  /* Attributes
   * ---------------------------------------------------------------------------------------------------------------- */

  email: DS.attr('string'),

  /* Relationships
   * ---------------------------------------------------------------------------------------------------------------- */

  roles: DS.hasMany('role'),
  sessions: DS.hasMany('session'),

  /* Instance Methods
   * ---------------------------------------------------------------------------------------------------------------- */

  signOut() {
    return new Promise((resolve, reject) => {
      this._signOut()
        .then(() => resolve(this))
        .catch(response => reject(response))
    });
  },

  /* Custom API end points
   * ---------------------------------------------------------------------------------------------------------------- */

  _signOut: collectionAction({ path: 'sign-out', type: 'PATCH' })
});
