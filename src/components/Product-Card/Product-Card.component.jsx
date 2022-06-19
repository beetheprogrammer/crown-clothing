import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CartContext } from '../../context/cart.context';
import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../Button/Button.component';
import "./Product-Card.styles.scss";

const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product;
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button buttonType="inverted" onClick={addProductToCart}>
				Add to cart
			</Button>
		</div>
	);
}

export default ProductCard