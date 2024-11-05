import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import "../styles/Navbar.css";

const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<div className="navbar">
			<div className="navbar-logo"></div>
			<p className="navbar-fonts">
				Categories <FaSortDown />
			</p>
			<p className="navbar-fonts">Men</p>
			<p className="navbar-fonts">Women</p>
			<p className="navbar-fonts">Kids</p>
			<p className="navbar-fonts">New Arrivals</p>
			<div className="search-container">
				<CiSearch className="search-icon" />
				<input
					className="search-input"
					placeholder="Search product ..."
				></input>
			</div>
			<div className="navbar-login">
				<p className="navbar-login-text">Sign up / Login</p>
			</div>
			<RiMenu4Fill
				className="navbar-mobile-popup"
				onClick={() => setShowSidebar(true)}
			/>

			{/* Sidebar Modal */}
			<div
				className={`sidebar-overlay ${showSidebar ? "show" : ""}`}
				onClick={() => setShowSidebar(false)}
			>
				<div className="sidebar" onClick={(e) => e.stopPropagation()}>
					<div className="sidebar-header">
						<div className="sidebar-logo"></div>
						<IoMdClose
							className="close-icon"
							onClick={() => setShowSidebar(false)}
						/>
					</div>

					<div className="sidebar-search">
						<CiSearch className="search-icon" />
						<input
							className="search-input"
							placeholder="Search product ..."
						></input>
					</div>

					<div className="sidebar-nav">
						<p className="sidebar-nav-item">
							Categories <FaSortDown />
						</p>
						<p className="sidebar-nav-item">Men</p>
						<p className="sidebar-nav-item">Women</p>
						<p className="sidebar-nav-item">Kids</p>
						<p className="sidebar-nav-item">New Arrivals</p>
					</div>

					<div className="sidebar-login">
						<p className="sidebar-login-text">Sign up / Login</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
