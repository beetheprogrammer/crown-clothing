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

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(true);
	const [cartItems, setIsCartItems] = useState([]);
	console.log("cartItems", cartItems);
	const addItemToCart = (productToAdd) => {
		setIsCartItems(addCartItem(cartItems, productToAdd));
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
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
