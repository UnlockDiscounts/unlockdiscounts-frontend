import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/BankingPage.css";
import "../App.css";
import { FaSortDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useBank } from "../hooks/useBank";

const BankingPage = () => {
	const [allData, setAllData] = useState({});
	const { bankData } = useBank();

	useEffect(() => {
		if (bankData) {
			setAllData(bankData);
		}
	}, [bankData]);

	// Refs for each scrollable container
	const creditCardsRef = useRef(null);
	const zeroSavingsRef = useRef(null);
	const savingsApplicationsRef = useRef(null);

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
		<div id="wrapper">
			<Navbar />
			<div className="banking-page-container">
				<div className="bp_filter_container">
					<div className="bp_filter_text">Filter By</div>
					<div className="bp_filter_dropdown">
						Bank Name <FaSortDown />
					</div>
				</div>
				<div className="bp_heading">
					<p className="bp_heading_text">
						EXPLORE OUR RANGE OF BANKING SERVICES AND SOLUTIONS
					</p>
				</div>

				{/* Credit cards container */}
				<div className="credit_cards">
					<div className="cc_heading">CREDIT CARDS</div>
					<button
						className="scroll_button left"
						onClick={() => scroll(creditCardsRef, "left")}
					>
						<FaArrowLeft />
					</button>
					<button
						className="scroll_button right"
						onClick={() => scroll(creditCardsRef, "right")}
					>
						<FaArrowRight />
					</button>
					<div className="cc_cards_container" ref={creditCardsRef}>
						{allData.length > 0 ? (
							allData.map(
								(item, index) =>
									item.type === "Credit Card" && (
										<div className="cc_card" key={index}>
											<div className="cc_card_image">
												<img src={item.image} alt={item.name} />
											</div>
											<div className="cc_card_title">{item.title}</div>
											<div className="cc_card_description">
												{item.description}
											</div>
											<div className="cc_card_button">Apply Now</div>
										</div>
									)
							)
						) : (
							<div>loading...</div>
						)}
					</div>
				</div>

				{/* Zero savings account container */}
				<div className="zero-saving-account">
					<div className="zsa_heading">ZERO SAVING ACCOUNTS</div>
					<div className="scroll_buttons">
						<button
							className="scroll_button left"
							onClick={() => scroll(zeroSavingsRef, "left")}
						>
							<FaArrowLeft />
						</button>
						<button
							className="scroll_button right"
							onClick={() => scroll(zeroSavingsRef, "right")}
						>
							<FaArrowRight />
						</button>
					</div>
					<div className="zsa_cards_container" ref={zeroSavingsRef}>
						{allData.length > 0 ? (
							allData.map(
								(item, index) =>
									item.type === "zero saving accounts" && (
										<div className="zsa_card" key={index}>
											<div className="zsa_card_image">
												<img src={item.image} alt={item.name} />
											</div>
											<div className="zsa_card_button">Apply Now</div>
										</div>
									)
							)
						) : (
							<div>loading....</div>
						)}
					</div>
				</div>

				{/* Saving applications container */}
				<div className="saving-applications">
					<div className="sap_heading">SAVING APPLICATIONS</div>
					<button
						className="scroll_button left"
						onClick={() => scroll(savingsApplicationsRef, "left")}
					>
						<FaArrowLeft />
					</button>
					<button
						className="scroll_button right"
						onClick={() => scroll(savingsApplicationsRef, "right")}
					>
						<FaArrowRight />
					</button>
					<div className="sap_cards_container" ref={savingsApplicationsRef}>
						{allData.length > 0 ? (
							allData.map(
								(item, index) =>
									item.type === "saving application" && (
										<div className="sap_card" key={index}>
											<div className="sap_card_header">
												<div className="sap_card_image">
													<img src={item.image} alt={item.name} />
												</div>
												<div className="sap_card_heading">Acorns</div>
											</div>
											<div className="sap_card_description">
												{item.description}
											</div>
											<div className="sap_card_button">
												Start Savings with Acorns
											</div>
										</div>
									)
							)
						) : (
							<div>loading...</div>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default BankingPage;
