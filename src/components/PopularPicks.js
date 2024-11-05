import React from "react";
import "../styles/PopularPicks.css";
import data from "../data/data";
import PopularPickCard from "./PopularPickCard";

const PopularPicks = () => {
	return (
		<div className="popular-picks">
			<div className="popular-picks-heading">Popular Picks</div>
			<div className="popular-picks-products-container">
				{data.map((item, index) => (
					<PopularPickCard data={item} key={index} />
				))}
			</div>
		</div>
	);
};

export default PopularPicks;
