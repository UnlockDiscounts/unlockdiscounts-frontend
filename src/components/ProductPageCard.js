import React from "react";
import "../styles/ProductPage.css";

const ProductPageCard = ({ data }) => {
	return (
		<div className="pp_card">
			<div className="pp_image">
				<img src={data.image} />
				<div className="pp-image-discount">{data.discount}% OFF</div>
			</div>
			<div className="pp-company">{data.company}</div>
			<div className="pp-type">{data.type}</div>
			<div className="pp-card-footer">
				<div className="pp-price">₹ {data.price}</div>
				<div className="pp-prevPrice">
					₹ {data.prevPrice} <div className="pp-prevPrice-stroke"></div>
				</div>
				<div className="pp-discount">{data.discount}% OFF</div>
			</div>
		</div>
	);
};

export default ProductPageCard;
