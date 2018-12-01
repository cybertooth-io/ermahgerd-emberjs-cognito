import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | protected-error', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:protected-error');
    assert.ok(route);
  });
});
