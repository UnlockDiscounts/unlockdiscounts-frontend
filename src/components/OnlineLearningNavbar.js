import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import "../styles/OnlineLearning.css";

const OnlineLearningNavbar = ({
	courseButton,
	collegeButton,
	setCollegeButton,
	setCourseButton,
}) => {
	return (
		// Online platform navbar
		<div className="online_learning_navbar_container">
			{/* left part  */}
			<div className="oln_leftPart">
				<div
					onClick={() => {
						setCourseButton(true);
						setCollegeButton(false);
					}}
					className={`${
						courseButton ? "oln_leftPart-text-selected" : "oln_leftPart-text"
					}`}
				>
					Courses
				</div>
				<div
					onClick={() => {
						setCourseButton(false);
						setCollegeButton(true);
					}}
					className={`${
						collegeButton ? "oln_leftPart-text-selected" : "oln_leftPart-text"
					}`}
				>
					Colleges
				</div>
			</div>

			{/* right part  */}
			<div className="oln_rightPart">
				<div className="oln_rightPart-text1">Filter By</div>
				<div className="oln_rightPart-text2">
					Subject <FaSortDown />
				</div>
			</div>
		</div>
	);
};

export default OnlineLearningNavbar;
