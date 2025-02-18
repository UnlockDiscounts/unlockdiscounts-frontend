import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import logo from "../assets/Logo1.svg";
import "../styles/NewsLetter.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const NewsLetter = () => {
	const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
	const [email, setEmail] = useState("");
	async function sendRequest() {
		try {
			const res = await axios.post(`${BACKEND_URL}/api/subsribe`, {
				email: email,
			});
			console.log(res.status);
			if (res.status === 200) {
				toast.success(res.data.message);
			} else if (res.status === 400) {
				toast.error(res.data.message);
			} else {
				console.log(res.data);
			}
			setEmail("");
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message);
			setEmail("");
		}
	}

	return (
		<div className="newsletter-container">
			<Toaster />
			<div className="newsletter-text-container">
				<div className="newsletter-text-heading">
					<div className="newsletter-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="newsletter-heading">UnlockDiscounts</div>
				</div>
				<div className="newsletter-text">Subscribe to our newsletter</div>
			</div>
			<div className="newsletter-email-container">
				<div className="newsletter-input-container">
					<MdEmail className="newsletter-email-logo" />
					<input
						type="email"
						className="newsletter-input"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="newsletter-subscribe-button" onClick={sendRequest}>
					<p className="newsletter-button-text">Subscribe</p>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
