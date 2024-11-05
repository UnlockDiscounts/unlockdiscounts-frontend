import React from "react";
import "../styles/Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-text-container">
				<div className="footer-column-container">
					<div className="footer-column-heading">Online Learning</div>
					<div className="footer-column-text">Courses</div>
					<div className="footer-column-text">Colleges</div>
				</div>
				<div className="footer-column-container">
					<div className="footer-column-heading">Fashion</div>
					<div className="footer-column-text">Men's Wear</div>
					<div className="footer-column-text">Women's Wear</div>
					<div className="footer-column-text">Kids's Wear</div>
				</div>
				<div className="footer-column-container">
					<div className="footer-column-heading">Electronics</div>
					<div className="footer-column-text">Mobile And Accessories</div>
					<div className="footer-column-text">Health Care</div>
					<div className="footer-column-text">Home Appliances</div>
				</div>
				<div className="footer-column-container">
					<div className="footer-column-heading">Banking</div>
					<div className="footer-column-text">Credit Cards</div>
					<div className="footer-column-text">Zero Saving Accounts</div>
					<div className="footer-column-text">Saving Applications</div>
				</div>
				<div className="footer-column-container">
					<div className="footer-column-heading">Resources</div>
					<div className="footer-column-text">Blogs</div>
					<div className="footer-column-text">User guides</div>
					<div className="footer-column-text">FAQs</div>
				</div>
				<div className="footer-column-container">
					<div className="footer-column-heading">Company</div>
					<div className="footer-column-text">About us</div>
					<div className="footer-column-text">Contact us</div>
				</div>
			</div>
			<div className="footer-terms">
				<p className="footer-terms-text">© 2024 UnlockDiscounts, Inc.</p>
				<p className="footer-terms-dot">•</p>
				<p className="footer-terms-text">Privacy</p>
				<p className="footer-terms-dot">•</p>
				<p className="footer-terms-text">Terms</p>
				<p className="footer-terms-dot">•</p>
				<p className="footer-terms-text">Sitemap</p>
			</div>
			<div className="footer-social-container">
				<FaTwitter className="footer-social-logo" />
				<FaFacebook className="footer-social-logo" />
				<FaLinkedin className="footer-social-logo" />
				<FaYoutube className="footer-social-logo" />
			</div>
		</div>
	);
};

export default Footer;
