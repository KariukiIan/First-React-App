import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineProduct = ({ product, handleCheck, handleDelete }) => {
	return (
		<li className="product">
			<input
				type="checkbox"
				checked={product.checked}
				onChange={() => handleCheck(product.id)}
			/>

			<label
				htmlFor=""
				onDoubleClick={() => handleCheck(product.id)}
				style={
					product.checked
						? {
								textDecoration: "line-through",
						  }
						: null
				}
			>
				{product.product}
			</label>

			<FaTrashAlt
				role="button"
				tabIndex={0}
				onClick={() => handleDelete(product.id)}
				aria-label={`Delete ${product.product}`}
			/>
		</li>
	);
};

export default LineProduct;
