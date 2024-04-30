import { newSpecPage } from '@stencil/core/testing';
import { SwcToolbar } from '../swc-toolbar';

describe('swc-toolbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcToolbar],
      html: `<swc-toolbar></swc-toolbar>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-toolbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-toolbar>
    `);
  });
});
