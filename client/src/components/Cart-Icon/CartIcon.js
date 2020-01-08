import React from 'react'


import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
  } from './style';

const CartIcon = () => {
    return (
        <CartContainer >
        <ShoppingIcon />
        <ItemCountContainer></ItemCountContainer>
      </CartContainer>
    )
}

export default CartIcon
