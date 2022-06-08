import React, { useContext } from "react";
import CheckoutItem from "../../components/Checkout-Item/Checkout-Item.component";
import { CartContext } from "../../context/cart.context";
import "./Checkout.styles.scss";

const Checkout = () => {
	const { cartItems, addItemToCart, removeItemFromCart } =
		useContext(CartContext);
	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Products</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => {
				const { name, quantity, id } = cartItem;
				return (
          <CheckoutItem key={id} cartItem={cartItem}/>
				);
			})}
      <span className="total">Total: 0</span>
		</div>
	);
};

export default Checkout;
