import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./Checkout-Item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { clearItemFromCart, addItemToCart, removeItemFromCart } =
		useContext(CartContext);
  const clearCartItem = () => clearItemFromCart(cartItem);
  const incrementItem = () => addItemToCart(cartItem);
  const decrementItem = () => removeItemFromCart(cartItem);
	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={decrementItem}>
					&#10094;
				</div>
				{quantity}
				<div className="arrow" onClick={incrementItem}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={clearCartItem}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
