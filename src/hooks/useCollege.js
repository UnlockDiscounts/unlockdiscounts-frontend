import axios from "axios";
import { useEffect, useState } from "react";

export const useCollege = () => {
	const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
	const [college, setCollege] = useState({});

	useEffect(() => {
		sendRequest();
	}, []);

	async function sendRequest() {
		try {
			const res = await axios.get(`${BACKEND_URL}/api/college/college-list`);
			if (res.status === 200) {
				setCollege(res.data.items);
			} else {
				console.log(res.data);
			}
		} catch (error) {
			console.log(error);
		}
	}
	return {
		college,
	};
};
