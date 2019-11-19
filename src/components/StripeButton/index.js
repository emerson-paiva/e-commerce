import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_UNQKjjz5CesjPa2ZFPPlluTI00Qt0c81mV';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='E-Commerce'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publicKey}
    />
  );
}

export default StripeCheckoutButton;
