import { newE2EPage } from '@stencil/core/testing';

describe('swc-toolbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-toolbar></swc-toolbar>');

    const element = await page.find('swc-toolbar');
    expect(element).toHaveClass('hydrated');
  });
});
