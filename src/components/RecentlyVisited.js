import React, { useEffect, useState } from "react";
import "../styles/RecentlyVisited.css";
import ProductPageCard from "./ProductPageCard";
import { useRecent } from "../hooks/useRecent";

const RecentlyVisited = () => {
	const { recentData } = useRecent();
	const [allCards, setAllCards] = useState({});

	useEffect(() => {
		setAllCards(recentData);
	}, [recentData]);
	return (
		<div className="recently-visited">
			<div className="recently-visited-heading">Recently Visited</div>
			<div className="recently-visited-cards-container">
				{allCards.length > 0 ? (
					allCards.map((item, index) => (
						<ProductPageCard key={index} data={item} />
					))
				) : (
					<div>Loading...</div>
				)}
			</div>
		</div>
	);
};

export default RecentlyVisited;
