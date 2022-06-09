import React, { Fragment, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories-Preview/Categories-Preview.component";
import "./Shop.styles.scss";

const Shop = () => {
  console.log("SHOP PAGE");
	return (
		<Routes>
			<Route index element={<CategoriesPreview/>}/>
		</Routes>
	);
};

export default Shop;
