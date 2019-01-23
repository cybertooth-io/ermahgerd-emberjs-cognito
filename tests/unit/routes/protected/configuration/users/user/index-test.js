import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | protected/configuration/users/user/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:protected/configuration/users/user/index');
    assert.ok(route);
  });
});
