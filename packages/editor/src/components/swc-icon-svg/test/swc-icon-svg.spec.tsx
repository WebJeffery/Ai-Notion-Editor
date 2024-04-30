import { newSpecPage } from '@stencil/core/testing';
import { SwcIconSvg } from '../swc-icon-svg';

describe('swc-icon-svg', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcIconSvg],
      html: `<swc-icon-svg></swc-icon-svg>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-icon-svg>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-icon-svg>
    `);
  });
});
