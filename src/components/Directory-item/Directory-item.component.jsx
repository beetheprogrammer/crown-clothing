import React from 'react'
import "./Directory-item.styles.scss"

const DirectoryItem = ({category : { imageUrl , title}}) => {
	return (
		<div className="directory-item-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="body">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default DirectoryItem