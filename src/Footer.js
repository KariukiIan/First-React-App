import React from "react";

const Footer = ({ length }) => {
	return (
		<footer>
			<p>
				{length} {length === 1 ? "Product" : "Products"}
			</p>
		</footer>
	);
};

export default Footer;
