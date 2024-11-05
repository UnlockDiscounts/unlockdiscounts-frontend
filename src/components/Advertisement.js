import React from "react";
import "../styles/Advertisement.css";
import image1 from "../assets/diwali.png";
import image2 from "../assets/diwali2.png";

const Advertisement = () => {
	return (
		<div className="advertisement-container">
			<div className="advertisement-card">
				<div className="advertisement-image1">
					<img src={image1} alt="Advertisement Image1" />
					<div className="advertisement-image1-textbox">
						<p className="advertisement-image1-text1">
							Diwali Dhamaka Sale - Up to{" "}
							<span className="advertisement-image1-subtext">50% OFF</span> on
							Everything!
						</p>
						<p className="advertisement-image1-text2">
							Shop Now and Brighten Your Diwali with Exclusive Deals
						</p>
					</div>
				</div>
				<div className="advertisement-image2">
					<img src={image2} alt="Advertisement Image2" />
				</div>
			</div>
		</div>
	);
};

export default Advertisement;
