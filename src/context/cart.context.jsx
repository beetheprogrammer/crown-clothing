import { createContext, useEffect, useReducer, useState } from "react";

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
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (cartItems, cartItemToRemove) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
});

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartPrice: 0,
};

export const CART_ACTION_TYPES = {
	SET_CART_ITEMS: "SET_CART_ITEMS",
	TOGGLE_CART_VISIBILITY: "TOGGLE_CART_VISIBILITY",
};

const cartReducer = (state, { type, payload }) => {
	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return { ...state, ...payload };
		case CART_ACTION_TYPES.TOGGLE_CART_VISIBILITY:
			return { ...state, isCartOpen: !state.isCartOpen };

		default:
			break;
	}
};

export const CartProvider = ({ children }) => {
	const [{ cartItems, isCartOpen, cartCount, cartPrice }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);
	// const [isCartOpen, setIsCartOpen] = useState(false);
	// const [cartItems, setIsCartItems] = useState([]);
	// const [cartPrice, setCartPrice] = useState(0);

	// useEffect(() => {
	//   const cartPriceTotal = cartItems.reduce(
	// 		(previousTotal, { price, quantity }) => previousTotal + price * quantity,
	// 		0
	// 	);
	//   setCartPrice(cartPriceTotal);
	// }, [cartItems]);

	const updateCartItemsReducer = (newCartItems) => {
		const newCartCount = newCartItems.reduce(
			(previousTotal, { quantity }) => previousTotal + quantity,
			0
		);

		const newCartTotal = newCartItems.reduce(
			(previousTotal, { price, quantity }) => previousTotal + price * quantity,
			0
		);

		dispatch({
			type: CART_ACTION_TYPES.SET_CART_ITEMS,
			payload: {
				cartItems: newCartItems,
				cartTotal: newCartTotal,
				cartCount: newCartCount,
			},
		});
	};

	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemFromCart = (cartItemToRemove) => {
		const newCartItems = removeCartItem(cartItems, cartItemToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const clearItemFromCart = (cartItemToRemove) => {
		const newCartItems = clearCartItem(cartItems, cartItemToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const cartTotal = cartItems.reduce(
		(previousTotal, { quantity }) => previousTotal + quantity,
		0
	);

  const toggleCartVisibility = () => {
    dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART_VISIBILITY });
  }

	const value = {
		isCartOpen,
		setIsCartOpen: toggleCartVisibility,
		addItemToCart,
		cartItems,
		cartTotal,
		removeItemFromCart,
		clearItemFromCart,
		cartPrice,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
