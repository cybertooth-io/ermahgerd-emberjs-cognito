import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | protected/profile/configure-mfa', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:protected/profile/configure-mfa');
    assert.ok(route);
  });
});
