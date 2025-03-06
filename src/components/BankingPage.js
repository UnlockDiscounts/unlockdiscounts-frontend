import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/BankingPage.css";
import "../App.css";
import { FaSortDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useBank } from "../hooks/useBank";
import Zero_SavingData from "../data/zero_savings_data";
import saving_application_data from "../data/saving_application_data";

const BankingPage = () => {
	const location = useLocation();
	const [heading, setHeading] = useState(location.state?.heading || '');
	const [bankingData, setBankingData] = useState([]);
	const [zeroSavingsData, setZeroSavingsData] = useState([]);
	const [savingsAppsData, setSavingsAppsData] = useState([]);

	const { bankData } = useBank();

	const scrollToHeading = () => {
		if (location.state?.heading) {
            const section = document.getElementById(location.state.heading);

				if(section.id === 'credit_cards'){
					window.scrollTo(0, 0);
				}
				if(section.id === 'zero-saving-account'){
					setTimeout(() => {
						const yOffset = 0; 
						const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
				
						console.log('Scrolling to:', y);
						window.scrollTo({ top: y, behavior: 'smooth' });
					}, 100); 
				}
				if(section.id === 'saving-applications'){
					setTimeout(() => {
						const yOffset = 0; 
						const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
				
						console.log('Scrolling to:', y); 
						window.scrollTo({ top: y, behavior: 'smooth' });
					}, 100);
				}
        }
	}
	useEffect(() => {
		setHeading(location.state?.heading || '');
        scrollToHeading();
    }, [location]);

	useEffect(() => {
		if (bankData) {
			setBankingData(bankData);
		}
		setZeroSavingsData(Zero_SavingData);
		setSavingsAppsData(saving_application_data);
	}, [bankData]);

	// Refs for each scrollable container
	const creditCardsRef = useRef(null);
	const zeroSavingsRef = useRef(null);
	const savingsApplicationsRef = useRef(null);

	// Scroll function for left and right buttons
	const scroll = (ref, direction) => {
		const scrollAmount = 300;
		ref.current.scrollBy({
			left: direction === "left" ? -scrollAmount : scrollAmount,
			behavior: "smooth",
		});
	};

	return (
		<div id="wrapper">
			<Navbar />
			<div className="banking-page-container">
				<div className="bp_heading">
					<p className="bp_heading_text">
						EXPLORE OUR RANGE OF BANKING SERVICES AND SOLUTIONS
					</p>
				</div>

				{/* Credit Cards Section */}
				<div className="credit_cards" id="credit_cards">
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
						{bankingData.length > 0 ? (
							bankingData
								.filter((item) => item.type === "Credit Card")
								.map((item, index) => (
									<div className="cc_card" key={index}>
										<div className="cc_card_image">
											<img src={item.image} alt={item.name} />
										</div>
										<div className="cc_card_title">{item.title}</div>
										<div className="cc_card_description">{item.description}</div>
										<button
											className="cc_card_button"
											onClick={() => window.open(item.link, "_blank")}
										>
											Apply Now
										</button>
									</div>
								))
						) : (
							<div>Loading...</div>
						)}
					</div>
				</div>

				{/* Zero Savings Accounts Section */}
				<div className="zero-saving-account" id="zero-saving-account">
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
						{zeroSavingsData.length > 0 ? (
							zeroSavingsData.map((item, index) => (
								<div className="zsa_card" key={index}>
									<div className="zsa_card_image">
										<img src={item.image} alt={item.name} />
									</div>
									<button className="zsa_card_button">Apply Now</button>
								</div>
							))
						) : (
							<div>Loading...</div>
						)}
					</div>
				</div>

				{/* Saving Applications Section */}
				<div className="saving-applications" id="saving-applications">
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
						{savingsAppsData.length > 0 ? (
							savingsAppsData.map((item, index) => (
								<div className="sap_card" key={index}>
									<div className="sap_card_header">
										<div className="sap_card_image">
											<img src={item.image} alt={item.name} />
										</div>
										<div className="sap_card_heading">{item.name}</div>
									</div>
									<div className="sap_card_description">{item.description}</div>
									<button className="sap_card_button">Start Saving</button>
								</div>
							))
						) : (
							<div>Loading...</div>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default BankingPage;
