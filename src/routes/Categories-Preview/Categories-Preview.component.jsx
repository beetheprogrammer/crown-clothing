import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/Category-Preview/Category-Preview.component';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import "./Categories-Preview.styles.scss";

const CategoriesPreview = () => {
  const categoriesMap  = useSelector(selectCategoriesMap);
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
