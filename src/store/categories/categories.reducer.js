import { CATEGORIES_TYPES } from "./categories.types";

export const CATEGORIES_INITAL_STATE = {
	categories: [],
};

export const categoriesReducer = (
	state = CATEGORIES_INITAL_STATE,
	{ type, payload }
) => {
  switch (type) {
		case CATEGORIES_TYPES.SET_CATEGORIES:
			return { ...state, categories: payload };

		default:
			return state;
	}
};
