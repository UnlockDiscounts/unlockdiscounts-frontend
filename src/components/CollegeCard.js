import React from "react";
import "../styles/College.css";

const CollegeCard = ({ data }) => {
	return (
		<div className="college_card">
			<div className="college_card_img">
				<img src={data.image} alt={data.name} />
			</div>
			<div className="college_card_name">{data.name}</div>
			<div className="college_card_footer">
				<div className="college_card_description">{data.description}</div>
				<div className="college_card_button">
					<p className="college_card_button_text">Inquire</p>
				</div>
			</div>
		</div>
	);
};

export default CollegeCard;
