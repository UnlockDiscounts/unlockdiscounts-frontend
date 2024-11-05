import React from "react";
import { IoBagHandleSharp } from "react-icons/io5";

const HeroLeft = () => {
	return (
		<div className="hero-section-left">
			<p className="hero-heading">
				Find <span className="red-text">Deals</span> that Fit Your{" "}
				<span className="blue-text">Budget</span>.
			</p>
			<p className="hero-description">
				Browse through our diverse range of meticulously crafted garments,
				designed to bring out your individuality and cater to your sense of
				style.
			</p>
			<div className="hero-button">
				<IoBagHandleSharp className="bag-icon" />
				Shop Now
			</div>
		</div>
	);
};

export default HeroLeft;
