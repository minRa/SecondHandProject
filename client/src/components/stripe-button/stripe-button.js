import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {withRouter} from'react-router-dom';
import {connect} from 'react-redux';
import { clearCart } from'../../redux/cart/cart.actions';


const StripeCheckoutButton = ({ price , history , clearCart}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_zUgpRQKNcJF6lCRzJ73YxUAB00AGcTVX90';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
        console.log(response);

        
        clearCart()
        history.push('/')
      })
      .catch(error => {
        console.log('Payment Error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='NZ_SecondHandShop.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};



const mapDispatchToProps = dispatch => ({
  clearCart:() => dispatch(clearCart())
})


export default withRouter ( 
  connect(null,
  mapDispatchToProps
  )(StripeCheckoutButton))
