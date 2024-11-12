import React from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import Men from "../assets/Men.png";
import Women from "../assets/Women.png";
import Electronics from "../assets/Electronics.png";
import Kid from "../assets/Kid.png";
import OnlineLearning from "../assets/Online Learning.png";
import Banking from "../assets/Banking.png";

const HeroLeft = () => {
	return (
		<div className="hero-section-left">
			<div className="hero-mobile-categories">
				<div className="hm-category-card">
					<div className="hmc-image-men">
						<img src={Men} />
					</div>
					<div className="hmc-text">Men</div>
				</div>
				<div className="hm-category-card">
					<div className="hmc-image-women">
						<img src={Women} />
					</div>
					<div className="hmc-text">Women</div>
				</div>
				<div className="hm-category-card">
					<div className="hmc-image-kid">
						<img src={Kid} />
					</div>
					<div className="hmc-text">Kids</div>
				</div>
				<div className="hm-category-card">
					<div className="hmc-image-electornics">
						<img src={Electronics} />
					</div>
					<div className="hmc-text">Electronics</div>
				</div>
				<div className="hm-category-card">
					<div className="hmc-image-onlineLearning">
						<img src={OnlineLearning} />
					</div>
					<div className="hmc-text">Online Learning</div>
				</div>
				<div className="hm-category-card">
					<div className="hmc-image-banking">
						<img src={Banking} />
					</div>
					<div className="hmc-text">Banking</div>
				</div>
			</div>
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
