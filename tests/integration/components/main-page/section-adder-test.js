import { module, test } from 'qunit';
import { setupRenderingTest } from 'task-manager/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | main-page/section-adder', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MainPage::SectionAdder />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <MainPage::SectionAdder>
        template block text
      </MainPage::SectionAdder>
    `);

    assert.dom().hasText('template block text');
  });
});
