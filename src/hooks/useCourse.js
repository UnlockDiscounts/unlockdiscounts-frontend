import axios from "axios";
import { useEffect, useState } from "react";

export const useCourse = () => {
	const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
	const [courses, setCourses] = useState({});

	useEffect(() => {
		sendRequest();
	}, []);

	async function sendRequest() {
		try {
			const res = await axios.get(`${BACKEND_URL}/api/courses/course-list`);
			if (res.status === 200) {
				setCourses(res.data.items);
			} else {
				console.log(res.data);
			}
		} catch (error) {
			console.log(error);
		}
	}
	return {
		courses,
	};
};
