import React, { useContext } from 'react'
import ProductCard from '../../components/Product-Card/Product-Card.component';
import { ProductsContext } from '../../context/products.context';
import "./Shop.styles.scss";

const Shop = () => {
  const {products} = useContext(ProductsContext)
  return (
		<div className="products-container">
			{products.map((product) => {
				return <ProductCard key={product.id} product={product} />;
			})}
		</div>
	);
}

export default Shop