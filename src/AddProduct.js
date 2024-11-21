import React from "react";
import { FaPlus } from "react-icons/fa";

const AddProduct = ({ newProduct, setNewProduct, handleSubmit }) => {
	return (
		<form className="addForm" onSubmit={handleSubmit}>
			<label htmlFor="addItem"></label>
			<input
				type="text"
				autoFocus
				id="addItem"
				placeholder="add Item"
				required
				value={newProduct}
				onChange={(e) => setNewProduct(e.target.value)}
			/>
			<button type="submit" aria-label="Add Item">
				<FaPlus />
			</button>
		</form>
	); 
};

export default AddProduct;
