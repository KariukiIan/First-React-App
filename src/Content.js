import React from "react";
import ProductsList from "./productsList";

const Content = ({ products, handleCheck, handleDelete }) => {
	return (
		<main>
			{products.length ? (
				<ProductsList
					products={products}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			) : (
				<p style={{ marginTop: "2rem" }}>Your list is empty.</p>
			)}
		</main>
	);
};

export default Content;