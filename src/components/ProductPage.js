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

const ProductPage = () => {
	var { category_param } = useParams();
	const [category, setCategory] = useState(category_param);
	const navigate = useNavigate();
	const [showFilter, setShowFilter] = useState(false);
	const [filteredProducts, setFilteredProducts] = useState(product_data);
	const [filters, setFilters] = useState({
		category: category_param,
		minPrice: 0,
		maxPrice: 10000,
		discount: 0,
	});

	useEffect(() => {
		applyFilters();
	}, category_param);

	const categories = [
		"Men",
		"Women",
		"Kids",
		"Electronic",
		"Pet Care",
		"Home Appliance",
		"Mobile & Accessories",
	];

	const discountOptions = [
		{ value: 10, label: "10% Off or more" },
		{ value: 20, label: "20% Off or more" },
		{ value: 30, label: "30% Off or more" },
		{ value: 50, label: "50% Off or more" },
		{ value: 70, label: "70% Off or more" },
	];

	// Update filters when category_param changes
	useEffect(() => {
		setFilters((prev) => ({ ...prev, category: category_param }));
	}, [category_param]);

	// Apply filters to product data
	const applyFilters = () => {
		let filtered = product_data.filter((product) => {
			const matchesCategory =
				filters.category === "all" || product.category === filters.category;
			const matchesPrice =
				product.price >= filters.minPrice && product.price <= filters.maxPrice;
			const matchesDiscount =
				filters.discount === 0 || product.discount >= filters.discount;

			return matchesCategory && matchesPrice && matchesDiscount;
		});

		setFilteredProducts(filtered);
		setShowFilter(false);
	};

	// Handle category change
	const handleCategoryChange = (newCategory) => {
		setCategory(newCategory);
		setFilters((prev) => ({ ...prev, category: newCategory }));
		navigate(`/products/${newCategory}`);
		window.location.reload();
	};

	return (
		<div id="wrapper">
			{/* navbar for the product page  */}
			<div className="navbar mobile">
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
					{filteredProducts.map((item, index) => (
						<ProductPageCard data={item} key={index} />
					))}
				</div>

				{/* Filter Modal */}
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
								{categories.map((cat) => (
									<div className="radio-item" key={cat}>
										<input
											type="radio"
											id={`category-${cat}`}
											name="category"
											value={cat}
											checked={filters.category === cat}
											onChange={() => handleCategoryChange(cat)}
										/>
										<label className="radio-label" htmlFor={`category-${cat}`}>
											{cat}
										</label>
									</div>
								))}
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
								{discountOptions.map(({ value, label }) => (
									<div className="radio-item" key={value}>
										<input
											type="radio"
											id={`discount-${value}`}
											name="discount"
											value={value}
											checked={filters.discount === value}
											onChange={() =>
												setFilters((prev) => ({
													...prev,
													discount: value,
												}))
											}
										/>
										<label
											className="radio-label"
											htmlFor={`discount-${value}`}
										>
											{label}
										</label>
									</div>
								))}
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
