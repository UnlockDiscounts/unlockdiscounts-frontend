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
				<img id="amazon" src={amazon} alt="Amazon logo" />
				<img id="myntra" src={myntra} alt="Myntra logo" />
				<img id="meesho" src={meesho} alt="Meesho logo" />
				<img id="flipkart" src={flipkart} alt="Flipkart logo" />
				<img id="ajio" src={ajio} alt="Ajio logo" />
			</div>
		</div>
	);
};

export default CompanyBar;
