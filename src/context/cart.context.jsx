import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem => cartItem.id !== cartItemToRemove.id) );
	}
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(true);
	const [cartItems, setIsCartItems] = useState([]);

	const addItemToCart = (productToAdd) => {
		setIsCartItems(addCartItem(cartItems, productToAdd));
	};
  
	const removeItemFromCart = (cartItemToRemove) => {
		setIsCartItems(removeCartItem(cartItems, cartItemToRemove));
	};

	const cartTotal = cartItems.reduce(
		(previousTotal, { quantity }) => previousTotal + quantity,
		0
	);

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		cartTotal,
		removeItemFromCart,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
