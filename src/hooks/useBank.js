import axios from "axios";
import { useEffect, useState } from "react";

export const useBank = () => {
	const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
	const [bankData, setBankData] = useState({});

	useEffect(() => {
		sendRequest();
	}, []);

	async function sendRequest() {
		try {
			const res = await axios.get(`${BACKEND_URL}/api/finance/banking-cards`);
			if (res.status === 200) {
				setBankData(res.data);
			} else {
				console.log(res.data);
			}
		} catch (error) {
			console.log(error);
		}
	}
	return {
		bankData,
	};
};
