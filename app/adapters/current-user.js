import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  _buildURL(/*modelName, id*/) {
    const url = this._super(...arguments);
    return url.replace('current-users', 'current-user');
  }
});
