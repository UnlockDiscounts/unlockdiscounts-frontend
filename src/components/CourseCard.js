import React from "react";
import "../styles/College.css";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ data }) => {
	return (
		<div className="course_card">
			<div className="course_card_img">
				<img src={data.image} alt={data.name} loading="lazy" />
			</div>
			<div className="course_card_author">{data.author}</div>
			<div className="course_card_name">{data.name}</div>
			<div className="course_card_footer">
				<div className="course_card_rating">
					<FaStar /> {data.rating}
				</div>
				<div className="course_card_price">₹ {data.price}</div>
				<div className="course_card_prevPrice">
					₹ {data.discounted_price}{" "}
					<div className="course_card-prevPrice-stroke"></div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
