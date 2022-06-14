import { type } from "@testing-library/user-event/dist/type"
import { CATEGORIES_TYPES } from "./categories.types"

export const setCategoriesMap = (categories) => ({
	type: CATEGORIES_TYPES.SET_CATEGORIES,
	payload: categories,
});