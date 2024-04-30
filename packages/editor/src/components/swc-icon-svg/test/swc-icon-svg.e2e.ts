import { newE2EPage } from '@stencil/core/testing';

describe('swc-icon-svg', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-icon-svg></swc-icon-svg>');

    const element = await page.find('swc-icon-svg');
    expect(element).toHaveClass('hydrated');
  });
});
