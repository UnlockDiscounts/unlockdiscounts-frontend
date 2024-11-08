import React, { useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import OnlineLearningNavbar from "./OnlineLearningNavbar";
import "../styles/OnlineLearning.css";
import Course from "./Course";
import College from "./College";

const OnlineLearning = () => {
	const [courseButton, setCourseButton] = useState(true);
	const [collegeButton, setCollegeButton] = useState(false);

	return (
		<div id="wrapper">
			<Navbar />
			<div className="online_learning_container">
				<OnlineLearningNavbar
					courseButton={courseButton}
					setCourseButton={setCourseButton}
					collegeButton={collegeButton}
					setCollegeButton={setCollegeButton}
				/>
				<div className="onl_heading">
					<p className="onl_heading_text">
						Elevate your career with online learning
					</p>
				</div>

				{courseButton ? <Course /> : <College />}
			</div>
			<Footer />
		</div>
	);
};

export default OnlineLearning;
