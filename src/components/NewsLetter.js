import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import logo from "../assets/Logo1.svg";
import "../styles/NewsLetter.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const NewsLetter = () => {
	const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
	const [email, setEmail] = useState("");

	// Email validation regex
	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	async function sendRequest() {
		if (!email) {
			toast.error("Please enter an email address");
			return;
		}

		if (!isValidEmail(email)) {
			toast.error("Please enter a valid email address");
			return;
		}

		try {
			const res = await axios.post(`${BACKEND_URL}/api/subscribe`, { email });

			if (res.status === 200) {
				toast.success(res.data.message);
			} else {
				toast.error(res.data.message);
			}
			setEmail("");
		} catch (error) {
			toast.error(error.response?.data?.message || "Something went wrong");
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
