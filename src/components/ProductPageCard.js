import React from "react";

const ProductPageCard = ({ data }) => {
	// Function to get the correct image URL
	const getImageUrl = () => {
		const imageUrl = data.image || (data.images && data.images[0]);

		if (imageUrl && imageUrl.includes("drive.google.com")) {
			// Check if it uses 'thumbnail?id='
			if (imageUrl.includes("thumbnail?id=")) {
				const fileId = imageUrl.split("thumbnail?id=")[1];
				return `https://drive.google.com/uc?export=view&id=${fileId}`;
			}

			// General handling for other Google Drive formats
			const fileId = imageUrl.match(/[-\w]{25,}/);
			if (fileId) {
				return `https://drive.google.com/uc?export=view&id=${fileId[0]}`;
			}
		}

		return imageUrl || "/api/placeholder/400/320"; // Fallback image
	};

	// Calculate discount percentage
	const discountPercentage = Math.round(
		((data.price - data.discounted_price) / data.price) * 100
	);

	return (
		<div className="pp_card">
			<div className="pp_image">
				<img
					src={data.images && data.images[0]}
					alt={data.company || data.title}
					loading="lazy"
				/>
				{discountPercentage > 0 && (
					<div className="pp-image-discount">{discountPercentage}% OFF</div>
				)}
			</div>
			<div className="pp-company">{data.company || data.title}</div>
			<div className="pp-type">{data.type || data.description}</div>
			<div className="pp-card-footer">
				<div className="pp-price">
					₹ {data.discounted_price && data.discounted_price.toLocaleString()}
				</div>
				<div className="pp-prevPrice">
					₹ {data.price.toLocaleString()}
					<div className="pp-prevPrice-stroke"></div>
				</div>
				{discountPercentage > 0 && (
					<div className="pp-discount">{discountPercentage}% OFF</div>
				)}
			</div>
			<button
				className="pp-card-button"
				onClick={() => window.open(data.affiliatelink, "_blank")}
			>
				Buy Now
			</button>
		</div>
	);
};

export default ProductPageCard;
