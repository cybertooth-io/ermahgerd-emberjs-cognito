import BaseModel from 'ember-cybertooth-base-model/models/-base';
import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default class Session extends BaseModel {

  /** Attributes
   * ---------------------------------------------------------------------------------------------------------------- */

  @attr('date') authenticatedAt;
  @attr browser;
  @attr browserVersion;
  @attr device;
  @attr('date') invalidatedAt;
  @attr ipAddress;
  @attr platform;
  @attr platformVersion;

  /** Relationships
   * ---------------------------------------------------------------------------------------------------------------- */

  @belongsTo('user') invalidatedBy;

  @belongsTo('user') user;
}
