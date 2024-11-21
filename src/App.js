import Header from "./Header";
import SearchProduct from "./SearchProduct";
import AddProduct from "./AddProduct";
import Footer from "./Footer";
import Content from "./Content";
import { useEffect, useState } from "react";

function App() {
	const API_URL = "http://localhost:3500/items";

	const [products, setProducts] = useState([]);
	const [newProduct, setNewProduct] = useState("");
	const [search, setSearch] = useState("");
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) throw new Error("Did not receive expected data");
				const listProducts = await response.json();
				setProducts(listProducts);
				setFetchError(null); // set fetch error to null if we have a successful fetch
			} catch (error) {
				setFetchError(error.message); // save fetch error in state and display it in the UI for the user, that is, if we fail to fetch the data from our API
			} finally {
				setIsLoading(false);
			}
		};

		fetchProducts();
	}, []);

	// Add new products to the array of products.
	const addProduct = (product) => {
		const id = products.length ? products[products.length - 1].id + 1 : 1; // increment the product.id of the new product.
		const myNewProduct = {
			id,
			product,
			checked: false,
		};

		const listProducts = [...products, myNewProduct];
		setProducts(listProducts);
	};

	// function to toggle the checked state
	const handleCheck = (id) => {
		const listProducts = products.map((product) =>
			product.id === id ? { ...product, checked: !product.checked } : product
		);
		setProducts(listProducts);
	};

	// function to delete products in the UI.
	const handleDelete = (id) => {
		const listProducts = products.filter((product) => product.id !== id);
		setProducts(listProducts);
	};

	// Fuction to submit the form.
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newProduct) return;
		addProduct(newProduct);
		setNewProduct("");
	};

	return (
		<div className="App">
			<Header title="Groceries" />
			<AddProduct
				newProduct={newProduct}
				setNewProduct={setNewProduct}
				handleSubmit={handleSubmit}
			/>
			<SearchProduct search={search} setSearch={setSearch} />
			<main>
				{isLoading && <p>Loading Items...</p>}
				{fetchError && (
					<p
						style={{
							color: "red",
						}}
					>{`Error: ${fetchError}`}</p>
				)}
				{!fetchError && !isLoading && (
					<Content
						// search functionality.
						products={products.filter((product) =>
							product.product.toLowerCase().includes(search.toLowerCase())
						)}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				)}
			</main>
			<Footer length={products.length} />
		</div>
	);
}

export default App;
