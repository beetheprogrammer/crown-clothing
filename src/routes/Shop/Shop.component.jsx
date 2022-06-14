import React, { Fragment, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setCategoriesMap } from "../../store/categories/categories.actions";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "../Categories-Preview/Categories-Preview.component";
import Category from "../Category/Category.component";
import "./Shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
		const getCategoriesMap = async () => {
			// const categoryMap = await getCategoriesAndDocuments();
      const categoeriesArray = await getCategoriesAndDocuments("categories");
			dispatch(setCategoriesMap(categoeriesArray));
		};
		getCategoriesMap();
	});

	return (
		<Routes>
			<Route index element={<CategoriesPreview/>}/>
			<Route path=":category" element={<Category/>}/>
		</Routes>
	);
};

export default Shop;
