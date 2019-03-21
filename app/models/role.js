import { attr, hasMany } from '@ember-decorators/data';
import BaseModel from 'ember-cybertooth-base-model/models/-base';

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
