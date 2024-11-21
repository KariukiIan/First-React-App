import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddProduct = ({ newProduct, setNewProduct, handleSubmit }) => {
	const inputRef = useRef();

	return (
		<form className="addForm" onSubmit={handleSubmit}>
			<label htmlFor="addItem"></label>
			<input
				type="text"
				autoFocus
				ref={inputRef}
				id="addItem"
				placeholder="add Item"
				required
				value={newProduct}
				onChange={(e) => setNewProduct(e.target.value)}
			/>
			<button
				type="submit"
				aria-label="Add Item"
				onClick={() => inputRef.current.focus()}
			>
				<FaPlus />
			</button>
		</form>
	);
};

export default AddProduct;
