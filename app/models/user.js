import { attr, hasMany } from '@ember-decorators/data';
import { not, readOnly } from '@ember/object/computed';
import BaseModel from 'ember-cybertooth-base-model/models/-base';

export default class User extends BaseModel {

  /* Attributes
   * ---------------------------------------------------------------------------------------------------------------- */

  @attr email;
  @attr('boolean') inCognito;

  /* Relationships
   * ---------------------------------------------------------------------------------------------------------------- */

  @hasMany('role') roles;
  @hasMany('session', { inverse: 'user' }) sessions;

  /* Computed
   * ---------------------------------------------------------------------------------------------------------------- */

  'inCognito?' = readOnly('inCognito');

  'notInCognito?' = not('inCognito?');
}
