import React from 'react';
import {connect} from 'react-redux';
import { removeItem, clearItemFromCart } from'../../../../redux/cart/cart.actions';


import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  RemoveCircleIconStyle,
  DeleteForeverIconStyle
} from './style';

const handleOnclick = () => {
  return ""
}


const CartItem = ({ item, removeItem, clearItemFromCart }) => {

  const {url, title, price, quantity} = item
  
  return (
  <CartItemContainer>
    <CartItemImage src={url} alt='item' />
    <ItemDetailsContainer>
      <span>{title}</span>
      <span>
        {quantity} x ${price}
      </span>
      <span>
        <RemoveCircleIconStyle onClick={() => removeItem(item)}/>
        &nbsp; &nbsp; 
        <DeleteForeverIconStyle onClick={() => clearItemFromCart(item)}/>
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
  )
};



const mapDispatchToProps = dispatch => ({
  removeItem : (item) => dispatch(removeItem(item)), 
  clearItemFromCart:(item)=> dispatch(clearItemFromCart(item))
})


export default connect(null, mapDispatchToProps)(CartItem)
