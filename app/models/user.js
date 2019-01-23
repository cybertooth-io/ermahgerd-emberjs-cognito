import BaseModel from 'ember-cybertooth-base-model/models/-base';
import DS from 'ember-data';

export default BaseModel.extend({

  /** Attributes
   * ---------------------------------------------------------------------------------------------------------------- */

  email: DS.attr('string'),

  /** Relationships
   * ---------------------------------------------------------------------------------------------------------------- */

  roles: DS.hasMany('role'),
  sessions: DS.hasMany('session')
});
