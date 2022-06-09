import React, { Fragment, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories-Preview/Categories-Preview.component";
import Category from "../Category/Category.component";
import "./Shop.styles.scss";

const Shop = () => {
  console.log("SHOP PAGE");
	return (
		<Routes>
			<Route index element={<CategoriesPreview/>}/>
			<Route path=":category" element={<Category/>}/>
		</Routes>
	);
};

export default Shop;
