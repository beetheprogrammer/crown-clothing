import React, { useContext } from 'react'
import "./Cart-Icon.styles.scss";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartTotal } = useContext(CartContext);
  console.log("totle", cartTotal);
  return (
		<div
			className="cart-icon-container"
			onClick={() => setIsCartOpen(!isCartOpen)}
		>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartTotal}</span>
		</div>
	);
}

export default CartIcon