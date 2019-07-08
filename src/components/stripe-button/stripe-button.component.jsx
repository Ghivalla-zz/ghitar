import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
	const priceForStripe = price*100;
	const publishableKey = 'pk_test_DGjyeEhs6CWNWSNyq3Zd9dR200JkrMqzcm';
	const onToken=token=>{
		console.log(token);
		alert('payment Successful');
	}

	return(
		<StripeCheckout
		currency="EUR"
		label='Pay Now'
		name='Ghitar'
		billingAddress
		shippingAdress
		description={`Your total is ${price}€`}
		amount={priceForStripe}
		panelLabel='Pay Now'
		token={onToken}
		stripeKey={publishableKey}
		/>
	);
};
export default StripeCheckoutButton;