import React, { useEffect, useState } from "react";
import "../styles/PopularPicks.css";

const PopularPickCard = (props) => {
	const [data, setData] = useState();

	useEffect(() => {
		setData(props.data);
	}, []);

	if (!data) {
		return <div>Loading</div>;
	}

	return (
		<div className="popular-picks-card">
			<div className="popular-picks-card__image">
				<img src={data.image} alt={data.name} />
			</div>
			<div className="popular-picks-card_info">
				<div className="popular-picks-card__name">
					<h2>{data.name}</h2>
				</div>
				<div className="popular-picks-card_footer">
					<div className="popular-picks-card_description">
						<p>{data.description}</p>
					</div>
					<div className="popular-picks-card_discount">
						<p className="popular-picks-card_discount-text">{data.discount}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopularPickCard;
