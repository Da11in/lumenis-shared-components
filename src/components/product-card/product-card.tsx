import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "product-card",
  styleUrl: "product-card.css",
  shadow: true,
})
export class ProductListCard {
  @Prop() code: string;

  @Prop() name: string;

  @Prop() description: string;

  @Prop() unitsInPack: number;

  @Prop() image: string;

  @Prop() price: number;

  @Prop() oldPrice: number;

  @Prop() points: number;

  render() {
    return (
      <Host>
        <div class="lm--product_item__wrapper">
          <img src={this.image} alt="product image" class="lm--product_item__image" />

          <div class="lm--product_item__fields_wrapper">
            <div class="lm--product_product_info">
              <p class="lm--product_item__name">{this.name}</p>
              <p class="lm--product_item__code">#{this.code}</p>
              <p class="lm--product_item__description">{this.description}</p>
              <p class="lm--product_item__units">{this.unitsInPack} units is pack</p>
            </div>

            <div class="lm--product_item__price_container">
              <p class="lm--product_item__old_price">{this.oldPrice}</p>
              <p class="lm--product_item__price">{this.price}$</p>
            </div>

            <div class="lm--product_item__points">
              <p class="lm--product_item__points__amount">{this.points}</p>
              <p class="lm--product_item__points__label">Points</p>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
