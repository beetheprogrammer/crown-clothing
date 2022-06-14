import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Product-Card/Product-Card.component";
import { CategoriesContext } from "../../context/categories.context";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import "./Category.styles.scss";

const Category = () => {
	const { category } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	console.log("category", category);
	console.log("products", products);
	console.log("categoriesMap", categoriesMap);

	return (
		<>
			<h2 className="category-title">{category.toUpperCase()}</h2>
			<div className="category-container">
				{products &&
					products.map((product) => {
						return <ProductCard key={product.id} product={product} />;
					})}
			</div>
		</>
	);
};

export default Category;
