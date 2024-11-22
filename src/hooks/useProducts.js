import axios from "axios";
import { useEffect, useState } from "react";

export const useProducts = () => {
	const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
	const [products, setProducts] = useState({});

	useEffect(() => {
		sendRequest();
	}, []);

	async function sendRequest() {
		try {
			const res = await axios.get(`${BACKEND_URL}/api/products/products-list`);
			if (res.status === 200) {
				setProducts(res.data.products);
			} else {
				console.log(res.data);
			}
		} catch (error) {
			console.log(error);
		}
	}
	return {
		products,
	};
};
