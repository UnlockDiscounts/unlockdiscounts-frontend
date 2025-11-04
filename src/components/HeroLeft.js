import React from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import Men from "../assets/Men.png";
import Women from "../assets/Women.png";
import Electronics from "../assets/Electronics.png";
import Kid from "../assets/Kid.png";
import OnlineLearning from "../assets/Online Learning.png";
import Banking from "../assets/Banking.png";
import { useNavigate } from "react-router-dom";
import logoo from '../assets/logoo.jpg'

const HeroLeft = () => {
	const navigate = useNavigate();
	return (
		<div className="hero-section-left">
			<div className="hero-mobile-categories">
				<div className="hm-category-card">
					<div
						className="hmc-image-men"
						onClick={() => {
							navigate("/products/Mens");
							window.location.reload();
						}}
					>
						<img src={Men} alt="Mens" />
					</div>
					<div className="hmc-text">Mens</div>
				</div>
				<div
					className="hm-category-card"
					onClick={() => {
						navigate("/products/Women");
						window.location.reload();
					}}
				>
					<div className="hmc-image-women">
						<img src={Women} alt="Women" />
					</div>
					<div className="hmc-text">Women</div>
				</div>
				<div
					className="hm-category-card"
					onClick={() => {
						navigate("/products/Kids");
						window.location.reload();
					}}
				>
					<div className="hmc-image-kid">
						<img src={Kid} alt="Kids" />
					</div>
					<div className="hmc-text">Kids</div>
				</div>
				<div
					className="hm-category-card"
					onClick={() => {
						window.location.href = "https://mendora-woad.vercel.app/";
						// window.location.reload();
					}}
				>
					<div className="hmc-image-electornics">
						<img src={logoo} alt="logo" />
					</div>
					<div className="hmc-text">Mendora</div>
				</div>
				<div
					className="hm-category-card"
					onClick={() => {
						navigate("/online_learning");
						window.location.reload();
					}}
				>
					<div className="hmc-image-onlineLearning">
						<img src={OnlineLearning} alt="Online Learning" />
					</div>
					<div className="hmc-text">Online Learning</div>
				</div>
				<div
					className="hm-category-card"
					onClick={() => {
						navigate("/banking");
						window.location.reload();
					}}
				>
					<div className="hmc-image-banking">
						<img src={Banking} alt="Banking" />
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
			<div
				className="hero-button"
				onClick={() => window.open("https://amzn.to/40ON71J", "_blank")}
			>
				<IoBagHandleSharp className="bag-icon" />
				Shop Now
			</div>
		</div>
	);
};

export default HeroLeft;
