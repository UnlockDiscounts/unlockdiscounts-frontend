import axios from "axios";
import { useEffect, useState } from "react";

export const usePopularPicks = () => {
	const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
	const [popularData, setPopularData] = useState({});

	useEffect(() => {
		sendRequest();
	}, []);

	async function sendRequest() {
		try {
			const res = await axios.get(`${BACKEND_URL}/api/products/popular-picks`);
			if (res.status === 200) {
				setPopularData(res.data);
			} else {
				console.log(res.data);
			}
		} catch (error) {
			console.log(error);
		}
	}
	return {
		popularData,
	};
};
