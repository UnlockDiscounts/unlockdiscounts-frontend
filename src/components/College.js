import React, { useEffect, useRef, useState } from "react";
import college_data from "../data/college_data";
import CollegeCard from "./CollegeCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useCollege } from "../hooks/useCollege";

const College = () => {
	const allCollege = useRef(null);
	const demand = useRef(null);
	const preference = useRef(null);

	const [allCollegeData, setAllCollegeData] = useState([]);
	const { college } = useCollege();

	useEffect(() => {
		if (college) {
			setAllCollegeData(college);
		}
	}, [college]);

	const scroll = (ref, direction) => {
		const scrollAmount = 300;
		if (direction === "left") {
			ref.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
		} else {
			ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	return (
		<div className="college_container">
			{/* All Colleges */}
			<div className="college_section">
				<div className="college_heading">Explore Colleges</div>
				<button className="scroll_button left" onClick={() => scroll(allCollege, "left")}>
					<FaArrowLeft />
				</button>
				<button className="scroll_button right" onClick={() => scroll(allCollege, "right")}>
					<FaArrowRight />
				</button>
				<div className="college_cards_container" ref={allCollege}>
					{allCollegeData.length > 0 ? (
						allCollegeData.map((item, index) => (
							<CollegeCard data={item} key={index} />
						))
					) : (
						<div>Loading</div>
					)}
				</div>
			</div>

			{/* Most In-Demand Colleges */}
			<div className="college_section">
				<div className="college_heading">Most In-Demand Colleges</div>
				<button className="scroll_button left" onClick={() => scroll(demand, "left")}>
					<FaArrowLeft />
				</button>
				<button className="scroll_button right" onClick={() => scroll(demand, "right")}>
					<FaArrowRight />
				</button>
				<div className="college_cards_container" ref={demand}>
					{college_data.map((item, index) => (
						<CollegeCard data={item} key={index} />
					))}
				</div>
			</div>

			{/* Based on Your Preferences */}
			<div className="college_section">
				<div className="college_heading">Based on Your Preferences</div>
				<button className="scroll_button left" onClick={() => scroll(preference, "left")}>
					<FaArrowLeft />
				</button>
				<button className="scroll_button right" onClick={() => scroll(preference, "right")}>
					<FaArrowRight />
				</button>
				<div className="college_cards_container" ref={preference}>
					{college_data.map((item, index) => (
						<CollegeCard data={item} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default College;
