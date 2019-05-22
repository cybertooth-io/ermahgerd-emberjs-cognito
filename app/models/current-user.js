import { collectionAction } from 'ember-api-actions';
import BaseModel from 'ember-cybertooth-base-model/models/-base';
import DS from 'ember-data';

const { attr, hasMany } = DS;

export default class CurrentUser extends BaseModel {
  /* Attributes
   * ---------------------------------------------------------------------------------------------------------------- */

  @attr email;

  /* Relationships
   * ---------------------------------------------------------------------------------------------------------------- */

  @hasMany('role') roles;
  @hasMany('session') sessions;

  /* Instance Methods
   * ---------------------------------------------------------------------------------------------------------------- */
  _signOut = collectionAction({ path: 'sign-out', type: 'PATCH' });

  /* Custom API end points
   * ---------------------------------------------------------------------------------------------------------------- */

  signOut() {
    return new Promise((resolve, reject) => {
      this._signOut()
        .then(() => resolve(this))
        .catch(response => reject(response))
    });
  }
}
