import { createSelector } from "reselect";

const selectCountReducer = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCountReducer],
	(cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
	[selectCountReducer],
	(cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((previousTotal, { quantity }) => previousTotal + quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(previousTotal, { price, quantity }) => previousTotal + price * quantity,
		0
	)
);

