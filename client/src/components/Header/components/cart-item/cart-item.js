import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './style';



const CartItem = ({ item: { url, title, price, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={url} alt='item' />
    <ItemDetailsContainer>
      <span>{title}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
