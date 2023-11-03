import { newSpecPage } from '@stencil/core/testing';
import { ProductListCard } from '../product-list-card';

describe('product-list-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProductListCard],
      html: `<product-list-card></product-list-card>`,
    });
    expect(page.root).toEqualHtml(`
      <product-list-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </product-list-card>
    `);
  });
});
