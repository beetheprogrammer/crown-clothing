import { increment } from "firebase/firestore";
import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./Checkout.styles.scss";

const Checkout = () => {
	const { cartItems, addItemToCart, removeItemFromCart } =
		useContext(CartContext);
	return (
		<div>
			{cartItems.map((cartItem) => {
				const { name, quantity } = cartItem
        return (
					<div>
						<h2>{name}</h2>
						<span>{quantity}</span>
						<span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
						<span onClick={() => addItemToCart(cartItem)}>increment</span>
					</div>
				);
			})}
		</div>
	);
};

export default Checkout;
