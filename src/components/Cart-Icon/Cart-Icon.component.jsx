import React, { useContext } from 'react'
import "./Cart-Icon.styles.scss";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cart.context';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.actions';

const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen)
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
		<div className="cart-icon-container" onClick={toggleIsCartOpen}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
}

export default CartIcon