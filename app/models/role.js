import BaseModel from 'ember-cybertooth-base-model/models/-base';
import DS from 'ember-data';

const { attr, hasMany } = DS;

export default class Role extends BaseModel {

  /** Attributes
   * ---------------------------------------------------------------------------------------------------------------- */

  @attr key;
  @attr name;
  @attr notes;

  /** Relationships
   * ---------------------------------------------------------------------------------------------------------------- */

  @hasMany('user') users;
}
