import { createContext, useEffect, useState } from "react";
import { SHOP_DATA } from "../shop-data";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
	categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});
	const value = { categoriesMap, setCategoriesMap };

	useEffect(() => {
		console.log("Categories map first");
    const getCategoriesMap = async () => {
			console.log("Categories map seconf");
      const categoryMap = await getCategoriesAndDocuments() 
			console.log("Categories map 3", categoryMap);
      setCategoriesMap(categoryMap);
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
