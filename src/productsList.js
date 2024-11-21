import React from "react";
import LineProduct from "./LineProduct";

const ProductsList = ({ products, handleCheck, handleDelete }) => {
	return (
		<ul>
			{products.map((product) => (
				<LineProduct
					key={product.id}
					product={product}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			))}
		</ul>
	);
};

export default ProductsList;
