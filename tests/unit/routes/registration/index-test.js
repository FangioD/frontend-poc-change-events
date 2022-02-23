import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | registration/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:registration/index');
    assert.ok(route);
  });
});
