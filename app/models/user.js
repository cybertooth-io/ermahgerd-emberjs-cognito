import { not, readOnly } from '@ember/object/computed';
import BaseModel from 'ember-cybertooth-base-model/models/-base';
import DS from 'ember-data';

export default BaseModel.extend({

  /* Attributes
   * ---------------------------------------------------------------------------------------------------------------- */

  email: DS.attr('string'),
  inCognito: DS.attr('boolean'),

  /* Relationships
   * ---------------------------------------------------------------------------------------------------------------- */

  roles: DS.hasMany('role'),
  sessions: DS.hasMany('session', { inverse: 'user' }),

  /* Computed
   * ---------------------------------------------------------------------------------------------------------------- */

  'inCognito?': readOnly('inCognito'),

  'notInCognito?': not('inCognito?')
});
