import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import college_data from "../data/college_data";
import CollegeCard from "./CollegeCard";

const College = () => {
	// Group colleges into pairs for two rows per card
	const groupedColleges = [];
	for (let i = 0; i < college_data.length; i += 2) {
		groupedColleges.push({
			topRow: college_data[i],
			bottomRow: college_data[i + 1],
		});
	}

	const scrollContainerRef = useRef(null);

	// Scroll function for left and right buttons
	const scroll = (direction) => {
		const scrollAmount = 300;
		if (direction === "left") {
			scrollContainerRef.current.scrollBy({
				left: -scrollAmount,
				behavior: "smooth",
			});
		} else {
			scrollContainerRef.current.scrollBy({
				left: scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="college_container">
			<div className="college_section">
				<div className="college_heading">EXPLORE COLLEGES</div>
				<button className="scroll_button left" onClick={() => scroll("left")}>
					<FaArrowLeft />
				</button>
				<button className="scroll_button right" onClick={() => scroll("right")}>
					<FaArrowRight />
				</button>
				<div className="college_cards_container" ref={scrollContainerRef}>
					{groupedColleges.map((group, index) => (
						<div className="college_group_card" key={index}>
							{/* Top Row College */}
							<CollegeCard data={group.topRow} />

							{/* Bottom Row College */}
							{group.bottomRow && <CollegeCard data={group.bottomRow} />}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default College;
