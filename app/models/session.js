import { attr, belongsTo } from '@ember-decorators/data';
import BaseModel from 'ember-cybertooth-base-model/models/-base';

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
