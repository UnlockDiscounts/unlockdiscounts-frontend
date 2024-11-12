import React, { useRef, useState } from "react";
import "../styles/Course.css";
import course_data from "../data/course_data";
import CourseCard from "./CourseCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Course = () => {
	const data = course_data;
	// Refs for each scrollable container
	const allCourse = useRef(null);
	const demand = useRef(null);
	const preference = useRef(null);

	// Scroll function for left and right buttons
	const scroll = (ref, direction) => {
		const scrollAmount = 300;
		if (direction === "left") {
			ref.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
		} else {
			ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	return (
		<div className="course_container">
			{/* all courses  */}
			<div className="course_section">
				<div className="course_section_heading">Explore Courses</div>
				<button
					className="scroll_button left"
					onClick={() => scroll(allCourse, "left")}
				>
					<FaArrowLeft />
				</button>
				<button
					className="scroll_button right"
					onClick={() => scroll(allCourse, "right")}
				>
					<FaArrowRight />
				</button>
				<div className="all_course_cards_container" ref={allCourse}>
					{data.map((item, index) => (
						<CourseCard data={item} key={index} />
					))}
				</div>
			</div>

			{/* in demand  */}
			<div className="course_section">
				<div className="course_section_heading">
					Most In-Demand Certifications
				</div>
				<button
					className="scroll_button left"
					onClick={() => scroll(demand, "left")}
				>
					<FaArrowLeft />
				</button>
				<button
					className="scroll_button right"
					onClick={() => scroll(demand, "right")}
				>
					<FaArrowRight />
				</button>
				<div className="all_course_cards_container" ref={demand}>
					{data.map((item, index) => (
						<CourseCard data={item} key={index} />
					))}
				</div>
			</div>

			<div className="course_section">
				<div className="course_section_heading">Based on Your Preferences</div>
				<button
					className="scroll_button left"
					onClick={() => scroll(preference, "left")}
				>
					<FaArrowLeft />
				</button>
				<button
					className="scroll_button right"
					onClick={() => scroll(preference, "right")}
				>
					<FaArrowRight />
				</button>
				<div className="all_course_cards_container" ref={preference}>
					{data.map((item, index) => (
						<CourseCard data={item} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Course;
