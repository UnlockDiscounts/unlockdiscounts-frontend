import React from "react";
import "../styles/RecentlyVisited.css";
import recently_visited_data from "../data/recently-visited-data";
import ProductPageCard from "./ProductPageCard";

const RecentlyVisited = () => {
	return (
		<div className="recently-visited">
			<div className="recently-visited-heading">Recently Visited</div>
			<div className="recently-visited-cards-container">
				{recently_visited_data.map((item, index) => (
					<ProductPageCard key={index} data={item} />
				))}
			</div>
		</div>
	);
};

export default RecentlyVisited;
