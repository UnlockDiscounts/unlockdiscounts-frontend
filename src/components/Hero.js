import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import "../styles/Hero.css";

const Hero = () => {
	return (
		<div className="hero-section">
			<HeroLeft />
			<HeroRight />
		</div>
	);
};

export default Hero;
