import React from "react";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.png";
import "../styles/NewsLetter.css";

const NewsLetter = () => {
	return (
		<div className="newsletter-container">
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
					/>
				</div>
				<div className="newsletter-subscribe-button">
					<p className="newsletter-button-text">Subscribe</p>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
