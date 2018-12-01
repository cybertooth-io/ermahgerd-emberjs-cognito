import DS from 'ember-data';
import TokenHeaders from '../mixins/adapters/token-headers';

export default DS.JSONAPIAdapter.extend(TokenHeaders, {
  namespace: 'api/v1'
});
