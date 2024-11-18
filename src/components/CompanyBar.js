import React from "react";
import amazon from "../assets/amazon.png";
import myntra from "../assets/myntra.png";
import meesho from "../assets/meesho.png";
import flipkart from "../assets/flipkart.png";
import ajio from "../assets/ajio.png";
import "../styles/Company.css";

const CompanyBar = () => {
	return (
		<div className="company-bar">
			<div className="company-image-container">
				<img
					id="amazon"
					src={amazon}
					alt="Amazon logo"
					onClick={() => window.open("https://amzn.to/40ON71J", "_blank")}
				/>
				<img
					id="myntra"
					src={myntra}
					alt="Myntra logo"
					onClick={() => window.open("https://myntr.it/deZvrSF", "_blank")}
				/>
				<img
					id="meesho"
					src={meesho}
					alt="Meesho logo"
					onClick={() => window.open("http://meesho.com/", "_blank")}
				/>
				<img
					id="flipkart"
					src={flipkart}
					alt="Flipkart logo"
					onClick={() => window.open("https://fktr.in/EE6swwK", "_blank")}
				/>
				<img
					id="ajio"
					src={ajio}
					alt="Ajio logo"
					onClick={() => window.open("https://ajiio.in/j7rl885", "_blank")}
				/>
			</div>
		</div>
	);
};

export default CompanyBar;
