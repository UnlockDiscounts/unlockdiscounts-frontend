import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaSortDown } from "react-icons/fa";

const ProductPageNavbar = () => {
	const navigate = useNavigate();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const categories = [
		"Men",
		"Women",
		"Kids",
		"Electronic",
		"Online Learnings",
		"Banking",
	];

	const handleCategoryClick = (category) => {
		navigate(`/products/${category}`);
		setIsDropdownOpen(false);
	};

	return (
		<div className="pp-navbar mobile">
			<div className="pp-navbar-logo">
				<img src="/Logo.svg" alt="Logo" />
			</div>

			{/* Categories Dropdown */}
			<div className="relative">
				<div
					className="pp-navbar-fonts flex items-center cursor-pointer"
					onClick={() => setIsDropdownOpen(!isDropdownOpen)}
				>
					Categories <FaSortDown className="ml-1" />
				</div>

				{isDropdownOpen && (
					<div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 z-50 min-w-[200px]">
						{categories.map((category) => (
							<div
								key={category}
								className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
								onClick={() => handleCategoryClick(category)}
							>
								{category}
							</div>
						))}
					</div>
				)}
			</div>

			{/* Navigation Links */}
			{["Men", "Women", "Kids", "New Arrivals"].map((item) => (
				<p
					key={item}
					className="pp-navbar-fonts cursor-pointer"
					onClick={() =>
						item !== "New Arrivals" && navigate(`/products/${item}`)
					}
				>
					{item}
				</p>
			))}

			{/* Search Bar */}
			<div className="search-container">
				<CiSearch className="search-icon" />
				<input className="search-input" placeholder="Search product ..." />
			</div>

			{/* Login Button */}
			<div className="navbar-login">
				<p className="navbar-login-text">Sign up / Login</p>
			</div>
		</div>
	);
};

export default ProductPageNavbar;
