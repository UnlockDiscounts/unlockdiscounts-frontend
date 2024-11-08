import React, { useState } from "react";
import "../styles/Course.css";
import course_data from "../data/course_data";
import CourseCard from "./CourseCard";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

const Course = () => {
	const data = course_data;
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 8;
	const totalPages = Math.ceil(data.length / itemsPerPage);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) =>
			prevPage < totalPages ? prevPage + 1 : prevPage
		);
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

	return (
		<div className="course_container">
			<div className="cc_cards_container">
				{currentItems.map((item, index) => (
					<CourseCard data={item} key={index} />
				))}
			</div>

			<div className="cc_pages_button_container">
				<button
					className="page_button"
					onClick={handlePrevPage}
					disabled={currentPage === 1}
				>
					<FaCaretLeft size={24} />
				</button>
				{Array.from({ length: totalPages }, (_, i) => i + 1).map(
					(pageNumber) => (
						<button
							key={pageNumber}
							className={`page_button ${
								currentPage === pageNumber ? "active" : ""
							}`}
							onClick={() => handlePageChange(pageNumber)}
						>
							{pageNumber}
						</button>
					)
				)}
				<button
					className="page_button"
					onClick={handleNextPage}
					disabled={currentPage === totalPages}
				>
					<FaCaretRight size={24} />
				</button>
			</div>
		</div>
	);
};

export default Course;
