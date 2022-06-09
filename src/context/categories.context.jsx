import { createContext, useEffect, useState } from "react";
import { SHOP_DATA } from "../shop-data";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
	categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setcategoriesMap] = useState({});
	const value = { categoriesMap, setcategoriesMap };

	useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments() 
      setcategoriesMap(categoryMap);
    }
    getCategoriesMap()
  });

	// 	addCollectionAndDocuments("categories", SHOP_DATA);
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
