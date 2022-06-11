import { CATEGORIES_TYPES } from "./categories.types";

export const CATEGORIES_INITAL_STATE = {
	categoriesMap: [],
};

export const categoriesReducer = (
	state = CATEGORIES_INITAL_STATE,
	{ type, payload }
) => {
  switch (type) {
		case CATEGORIES_TYPES.SET_CATEGORIES_MAP:
			return { ...state, categoriesMap: payload };

		default:
			return state;
	}
};
