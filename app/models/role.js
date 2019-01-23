import BaseModel from 'ember-cybertooth-base-model/models/-base';
import DS from 'ember-data';

export default BaseModel.extend({

  /** Attributes
   * ---------------------------------------------------------------------------------------------------------------- */

  key: DS.attr('string'),
  name: DS.attr('string'),
  notes: DS.attr('string'),

  /** Relationships
   * ---------------------------------------------------------------------------------------------------------------- */

  users: DS.hasMany('user')
});
