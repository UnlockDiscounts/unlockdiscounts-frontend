import React, { useRef } from "react";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

const ScrollableContainer = ({ children, className }) => {
	const scrollContainerRef = useRef(null);

	const scroll = (direction) => {
		if (scrollContainerRef.current) {
			// Calculate the width of two cards plus the gap
			const containerWidth = scrollContainerRef.current.offsetWidth;
			const scrollAmount = containerWidth - 80; // Subtract padding and account for buttons

			scrollContainerRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="scroll-container">
			<button
				onClick={() => scroll("left")}
				className="scroll-button scroll-button-left"
			>
				<FaCaretLeft size={18} />
			</button>

			<div ref={scrollContainerRef} className={`scroll-content ${className}`}>
				{children}
			</div>

			<button
				onClick={() => scroll("right")}
				className="scroll-button scroll-button-right"
			>
				<FaCaretRight size={18} />
			</button>
		</div>
	);
};

export default ScrollableContainer;
