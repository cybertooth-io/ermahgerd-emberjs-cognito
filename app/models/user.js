import DS from 'ember-data';
import { not, readOnly } from '@ember/object/computed';
import BaseModel from 'ember-cybertooth-base-model/models/-base';

const { attr, hasMany } = DS;

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
