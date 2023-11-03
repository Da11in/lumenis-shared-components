import { newE2EPage } from '@stencil/core/testing';

describe('product-list-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<product-list-card></product-list-card>');

    const element = await page.find('product-list-card');
    expect(element).toHaveClass('hydrated');
  });
});
