import React, { useState, useEffect } from "react";
import "../styles/ProductPage.css";
import Footer from "./Footer";
import { useNavigate, useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { FaSortDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import product_data from "../data/product_data";
import ProductPageCard from "./ProductPageCard";
import Logo from "../assets/Logo.svg";
import { useProducts } from "../hooks/useProducts";

const ProductPage = () => {
	const { category_param } = useParams();
	const [category, setCategory] = useState(category_param);
	const navigate = useNavigate();
	const [showFilter, setShowFilter] = useState(false);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [filters, setFilters] = useState({
		category: category_param,
		minPrice: 0,
		maxPrice: 10000,
		discount: 0,
	});
	const [allData, setAllData] = useState({});

	const { products } = useProducts({ category_param });

	useEffect(() => {
		if (products) {
			setAllData(products);
			applyFilters();
		}
	}, [products]);

	useEffect(() => {
		applyFilters();
	}, [category_param]);

	useEffect(() => {
		setFilters((prev) => ({ ...prev, category: category_param }));
	}, [category_param]);

	const applyFilters = () => {
		if (allData.length > 0) {
			let filtered = allData.filter((product) => {
				const matchesCategory =
					filters.category === "all" || product.section === filters.category;
				const matchesPrice =
					product.price >= filters.minPrice &&
					product.price <= filters.maxPrice;
				const matchesDiscount =
					filters.discount === 0 ||
					product.discountPercentage >= filters.discount;

				return matchesCategory && matchesPrice && matchesDiscount;
			});
			console.log(filtered);
			setFilteredProducts(filtered);
			setShowFilter(false);
		}
	};

	const handleCategoryClick = (newCategory) => {
		setCategory(newCategory);
		setFilters((prev) => ({ ...prev, category: newCategory }));
		if (newCategory == "Online Learnings") navigateToOnlineLearnings();
		else if (newCategory == "Banking") navigateToBanking();
		else navigate(`/products/${newCategory}`);
		setIsDropdownOpen(false);
	};

	const navigateToMen = () => navigate("/products/Mens");
	const navigateToWomen = () => navigate("/products/Womens");
	const navigateToKids = () => navigate("/products/Kids");
	const navigateToElectronic = () => navigate("/products/Electronics");
	const navigateToOnlineLearnings = () => navigate("/online_learning");
	const navigateToBanking = () => navigate("/banking");

	return (
		<div id="wrapper">
			<div className="pp-navbar mobile">
				<div className="pp-navbar-logo">
					<img
						src={Logo}
						alt="Logo"
						onClick={() => {
							navigate("/");
						}}
					/>
				</div>

				<div className="relative">
					<div
						className="pp-navbar-fonts flex items-center cursor-pointer"
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					>
						Categories <FaSortDown className="ml-1" />
					</div>

					{isDropdownOpen && (
						<div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 z-50 min-w-[200px]">
							<div
								className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
								onClick={navigateToElectronic}
							>
								Electronic
							</div>
							<div
								className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
								onClick={navigateToOnlineLearnings}
							>
								Online Learnings
							</div>
							<div
								className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
								onClick={navigateToBanking}
							>
								Banking
							</div>
						</div>
					)}
				</div>

				<p className="pp-navbar-fonts cursor-pointer" onClick={navigateToMen}>
					Mens
				</p>
				<p className="pp-navbar-fonts cursor-pointer" onClick={navigateToWomen}>
					Women
				</p>
				<p className="pp-navbar-fonts cursor-pointer" onClick={navigateToKids}>
					Kids
				</p>
				<p className="pp-navbar-fonts cursor-pointer">New Arrivals</p>

				<div className="search-container">
					<CiSearch className="search-icon" />
					<input className="search-input" placeholder="Search product ..." />
				</div>

				<div className="navbar-login">
					<p className="navbar-login-text">Sign up / Login</p>
				</div>
			</div>

			<div className="product-page-container">
				<div className="header-container">
					<div className="text-container">
						<div className="heading">{category_param} Category</div>
						<div className="description">
							{filteredProducts.length} result for "{category_param}"
						</div>
					</div>

					<div className="filter-container">
						<div className="pp-search-container">
							<CiSearch className="pp-search-icon" />
							<input
								className="pp-search-input"
								placeholder="Search product ..."
							/>
						</div>
						<div className="filter-text" onClick={() => setShowFilter(true)}>
							Filter <TbAdjustmentsHorizontal />
						</div>
					</div>
				</div>

				<div className="product-page-line"></div>

				<div className="product-page-cards-container">
					{filteredProducts.length > 0 ? (
						filteredProducts.map((item, index) => (
							<ProductPageCard data={item} key={index} />
						))
					) : (
						<div>Loading...</div>
					)}
				</div>

				<div className={`filter-overlay ${showFilter ? "show" : ""}`}>
					<div className="modal-container">
						<div className="modal-header">
							<div className="heading">FILTERS</div>
							<div
								className="close-button"
								onClick={() => setShowFilter(false)}
							>
								<IoMdClose />
							</div>
						</div>

						<div className="category-container">
							<div className="category-heading">CATEGORY</div>
							<div className="radio-group">
								<div className="radio-item">
									<input
										type="radio"
										id="category-men"
										name="category"
										value="Mens"
										checked={filters.category === "Mens"}
										onChange={() => handleCategoryClick("Mens")}
									/>
									<label className="radio-label" htmlFor="category-men">
										Men
									</label>
								</div>
								<div className="radio-item">
									<input
										type="radio"
										id="category-women"
										name="category"
										value="Womens"
										checked={filters.category === "Womens"}
										onChange={() => handleCategoryClick("Womens")}
									/>
									<label className="radio-label" htmlFor="category-women">
										Women
									</label>
								</div>
								<div className="radio-item">
									<input
										type="radio"
										id="category-kids"
										name="category"
										value="Kids"
										checked={filters.category === "Kids"}
										onChange={() => handleCategoryClick("Kids")}
									/>
									<label className="radio-label" htmlFor="category-kids">
										Kids
									</label>
								</div>
								<div className="radio-item">
									<input
										type="radio"
										id="category-electronic"
										name="category"
										value="Electronics"
										checked={filters.category === "Electronics"}
										onChange={() => handleCategoryClick("Electronics")}
									/>
									<label className="radio-label" htmlFor="category-electronic">
										Electronic
									</label>
								</div>
								<div className="radio-item">
									<input
										type="radio"
										id="category-online-learnings"
										name="category"
										value="Online Learnings"
										checked={filters.category === "Online Learnings"}
										onChange={() => handleCategoryClick("Online Learnings")}
									/>
									<label
										className="radio-label"
										htmlFor="category-online-learnings"
									>
										Online Learnings
									</label>
								</div>
								<div className="radio-item">
									<input
										type="radio"
										id="category-banking"
										name="category"
										value="Banking"
										checked={filters.category === "Banking"}
										onChange={() => handleCategoryClick("Banking")}
									/>
									<label className="radio-label" htmlFor="category-banking">
										Banking
									</label>
								</div>
							</div>
						</div>

						<div className="price-container">
							<div className="price-heading">PRICE RANGE</div>
							<div className="price-range">
								<input
									type="number"
									className="price-input"
									placeholder="Min"
									value={filters.minPrice}
									onChange={(e) =>
										setFilters((prev) => ({
											...prev,
											minPrice: Number(e.target.value),
										}))
									}
								/>
								<span>to</span>
								<input
									type="number"
									className="price-input"
									placeholder="Max"
									value={filters.maxPrice}
									onChange={(e) =>
										setFilters((prev) => ({
											...prev,
											maxPrice: Number(e.target.value),
										}))
									}
								/>
							</div>
						</div>

						<div className="discounts-container">
							<div className="discount-heading">DISCOUNTS</div>
							<div className="radio-group">
								<div className="radio-item">
									<input
										type="radio"
										id="discount-10"
										name="discount"
										value="10"
										checked={filters.discount === 10}
										onChange={() =>
											setFilters((prev) => ({ ...prev, discount: 10 }))
										}
									/>
									<label className="radio-label" htmlFor="discount-10">
										10% Off or more
									</label>
								</div>
								<div className="radio-item">
									<input
										type="radio"
										id="discount-20"
										name="discount"
										value="20"
										checked={filters.discount === 20}
										onChange={() =>
											setFilters((prev) => ({ ...prev, discount: 20 }))
										}
									/>
									<label className="radio-label" htmlFor="discount-20">
										20% Off or more
									</label>
								</div>
								<div className="radio-item">
									<input
										type="radio"
										id="discount-30"
										name="discount"
										value="30"
										checked={filters.discount === 30}
										onChange={() =>
											setFilters((prev) => ({ ...prev, discount: 30 }))
										}
									/>
									<label className="radio-label" htmlFor="discount-30">
										30% Off or more
									</label>
								</div>
								<div className="radio-item">
									<input
										type="radio"
										id="discount-50"
										name="discount"
										value="50"
										checked={filters.discount === 50}
										onChange={() =>
											setFilters((prev) => ({ ...prev, discount: 50 }))
										}
									/>
									<label className="radio-label" htmlFor="discount-50">
										50% Off or more
									</label>
								</div>
								<div className="radio-item">
									<input
										type="radio"
										id="discount-70"
										name="discount"
										value="70"
										checked={filters.discount === 70}
										onChange={() =>
											setFilters((prev) => ({ ...prev, discount: 70 }))
										}
									/>
									<label className="radio-label" htmlFor="discount-70">
										70% Off or more
									</label>
								</div>
							</div>
						</div>

						<button className="apply-button" onClick={applyFilters}>
							Apply Filters
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProductPage;
