import React from "react";
import "../styles/College.css";

const CourseCard = ({ data }) => {
	return (
		<div className="course_card">
			<div className="course_card_img">
				<img src={data.image} alt={data.name} />
			</div>
			<div className="course_card_author">{data.author}</div>
			<div className="course_card_name">{data.name}</div>
			<div className="course_card_price">₹ {data.price}</div>
		</div>
	);
};

export default CourseCard;
