import { type } from "@testing-library/user-event/dist/type"
import { CATEGORIES_TYPES } from "./categories.types"

export const setCategoriesMap = (categoriesMap) => ({type: CATEGORIES_TYPES.SET_CATEGORIES_MAP, payload: categoriesMap})