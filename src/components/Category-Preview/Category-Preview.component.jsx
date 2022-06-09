import React, { useContext } from 'react'
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../Product-Card/Product-Card.component';
import "./Category-Preview.styles.scss";

const CategoryPreview = ({title, products=[]}) => {
  return (
		<div className="category-preview-container">
			<h2>
				<span className="title">{title?.toUpperCase()}</span>
			</h2>
			<div className="preview">
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
			</div>
		</div>
	);
}

export default CategoryPreview