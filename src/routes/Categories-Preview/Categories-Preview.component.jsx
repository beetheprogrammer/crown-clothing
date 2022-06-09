import React, { useContext } from 'react'
import CategoryPreview from '../../components/Category-Preview/Category-Preview.component';
import { CategoriesContext } from '../../context/categories.context';
import "./Categories-Preview.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log("CATEGORIES PAGE", categoriesMap);
	return (
		<div className="category-preview-container">
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</div>
	);
}

export default CategoriesPreview;
