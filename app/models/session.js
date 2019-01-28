import BaseModel from 'ember-cybertooth-base-model/models/-base';
import DS from 'ember-data';

export default BaseModel.extend({

  /** Attributes
   * ---------------------------------------------------------------------------------------------------------------- */

  authenticatedAt: DS.attr('date'),
  browser: DS.attr('string'),
  browserVersion: DS.attr('string'),
  device: DS.attr('string'),
  invalidatedAt: DS.attr('date'),
  ipAddress: DS.attr('string'),
  platform: DS.attr('string'),
  platformVersion: DS.attr('string'),

  /** Relationships
   * ---------------------------------------------------------------------------------------------------------------- */

  invalidatedBy: DS.belongsTo('user'),

  user: DS.belongsTo('user')
});
