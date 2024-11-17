import axios from "axios";
import { useEffect, useState } from "react";

export const useRecent = () => {
	const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
	const [recentData, setRecentData] = useState({});

	useEffect(() => {
		sendRequest();
	}, []);

	async function sendRequest() {
		try {
			const res = await axios.get(`${BACKEND_URL}/api/products/popular-picks`);
			if (res.status === 200) {
				setRecentData(res.data);
			} else {
				console.log(res.data);
			}
		} catch (error) {
			console.log(error);
		}
	}
	return {
		recentData,
	};
};
