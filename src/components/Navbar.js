import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSortDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import "../styles/Navbar.css";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const navigate = useNavigate();
	const dropdownRef = useRef(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [sidebarsearchQuery, setSideBarSearchQuery] = useState("");
	const [homePage, setHomePage] = useState(true);

	const categories = [
		{ name: "Electronics", path: "products/Electronics" },
		{ name: "Online Learning", path: "online_learning" },
		{ name: "Banking", path: "banking" },
	];

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setShowDropdown(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleNavigate = (category) => {
		navigate(`/${category}`);
		window.location.reload();
		setShowDropdown(false);
		setShowSidebar(false);
	};

	return (
		<div className="navbar-container">
		<div className="navbar">
			<div className="navbar-logo" onClick={() => navigate("/")}>
				<img src={Logo} alt="Logo" />
			</div>

			{/* Categories Dropdown */}
			{/* <div className="navbar-fonts relative" ref={dropdownRef}>
				<div
					className="flex items-center cursor-pointer"
					onClick={() => setShowDropdown(!showDropdown)}
				>
					Categories <FaSortDown />
				</div>

				{showDropdown && (
					<div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[200px]">
						{categories.map((category) => (
							<div
								key={category.path}
								className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
								onClick={() => handleNavigate(category.path)}
							>
								{category.name}
							</div>
						))}
					</div>
				)}
			</div> */}

<p
				className="navbar-fonts"
				onClick={() => handleNavigate("products/Mens")}
				// setHomePage={setHomePage(true)}
			>
				Men
			</p>
			<p
				className="navbar-fonts"
				onClick={() => handleNavigate("products/Women")}
			>
				Women
			</p>
			<p
				className="navbar-fonts"
				onClick={() => handleNavigate("products/Kids")}
			>
				Kids
			</p>

			<p
				className="navbar-fonts"
				onClick={() => {handleNavigate("products/Electronics")
				setHomePage(false)}}
			>
				Electronics
			</p>
			<p
				className="navbar-fonts"
				onClick={() => handleNavigate("online_learning")}
				// setHomePage={setHomePage(true)}
			>
				Online Learning
			</p>
			<p
				className="navbar-fonts"
				onClick={() => handleNavigate("products/Banking")}
				// setHomePage={setHomePage(true)}
			>
				Banking
			</p>

			<div className="navbar-search-container">
				<input
					className="navbar-search-input"
					placeholder="Search products ..."
					value={searchQuery}
					onChange={(e) => {
						setSearchQuery(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter" && searchQuery.trim()) {
							navigate(`/searched_products/${searchQuery}`);
							window.location.reload();
						}
					}}
					
				/>
					<CiSearch className="navbar-search-icon"
						onClick={(e)=>{
							if(searchQuery !== ""){
							navigate(`/searched_products/${searchQuery}/${sidebarsearchQuery}`);
							window.location.reload();
						}}}/>
				{/* <button
					className="navbar_search_button"
					onClick={() => {
						navigate(`/searched_products/${searchQuery}`);
						window.location.reload();
						}}
						>
						Search
						</button> */}
			</div>

			<div className="navbar-login" onClick={(e)=>{navigate("/signup")}}>
				<p className="navbar-login-text">Sign Up / Login</p>
			</div>

			<RiMenu4Fill
				className="navbar-mobile-popup"
				onClick={() => {
					setShowSidebar(true);
					setHomePage(false);
				}}
			/>

				{/* Sidebar Modal */}
			{!homePage&&<div
				className={`sidebar-overlay ${showSidebar ? "show" : ""}`}
				onClick={() => setShowSidebar(false)}
			>
				<h1>Hellooooo</h1>
				<div className="sidebar" onClick={(e) => e.stopPropagation()}>
					<div className="sidebar-header">
					<div className="navbar-logo" onClick={() => navigate("/")}>
							<img src={Logo} alt="Logo" />
						</div>
						<IoMdClose
							className="close-icon"
							onClick={() => setShowSidebar(false)}
						/>
						
					</div>

					<div className="sidebar-nav">
						<p
							className="sidebar-nav-item"
							onClick={() => handleNavigate("products/Mens")}
						>
							Mens
						</p>
						<p
							className="sidebar-nav-item"
							onClick={() => handleNavigate("products/Women")}
						>
							Women
						</p>
						<p
							className="sidebar-nav-item"
							onClick={() => handleNavigate("products/Kids")}
						>
							Kids
						</p>
						<p
							className="sidebar-nav-item"
							onClick={() => handleNavigate("products/Electronics")}
						>
							Electronics
						</p>
						<p
							className="sidebar-nav-item"
							onClick={() => handleNavigate("online_learning")}
						>
							Online Learning
						</p>
						<p
							className="sidebar-nav-item"
							onClick={() => handleNavigate("products/Banking")}
						>
							Banking
						</p>
					</div>

					<div className="sidebar-login">
						<p className="sidebar-login-text">Sign up / Login</p>
					</div>
				</div>
			</div>}
		</div>
		</div>
	);
};

export default Navbar;
