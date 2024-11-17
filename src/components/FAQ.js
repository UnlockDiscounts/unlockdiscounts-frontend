import React, { useState } from "react";
import "../styles/FAQ.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const faqData = [
	{
		section: "General FAQs",
		questions: [
			{
				question: "How do I use a discount code?",
				answer:
					"Simply copy the discount code and apply it at checkout on the partner website...",
			},
			{
				question: "Why isn’t my discount code working?",
				answer:
					"Make sure the code is still valid, as some discounts have expiration dates...",
			},
			{
				question: "Can I use multiple codes in one transaction?",
				answer: "Many retailers allow only one discount code per order...",
			},
		],
	},
	{
		section: "Fashion Discounts FAQs",
		questions: [
			{
				question: "Do these fashion discounts apply to all brands?",
				answer:
					"Some discounts are site-wide and apply to all brands, while others are restricted to specific brands or products. Check the terms mentioned with each discount code to know what’s included.",
			},
			{
				question: "Are there any exclusive discounts for students?",
				answer:
					"Yes, many fashion platforms offer exclusive student discounts. You may need to verify your student status through partner services like UniDays or Student Beans to access these offers.",
			},
		],
	},
	{
		section: "Banking Offers FAQs",
		questions: [
			{
				question: "How do cashback offers work with credit cards?",
				answer:
					"When you use a credit card with a cashback offer, a percentage of your total transaction amount is credited back to your card or bank account. Check the bank’s terms, as some cashback offers apply only to specific categories or minimum purchase amounts.",
			},
			{
				question: "Can I get banking discounts for international purchases?",
				answer:
					"Some banks do offer cashback on international transactions, but you may need to confirm if the offer applies to international purchases. Keep in mind that currency conversion fees might still apply.",
			},
			{
				question: "Are there discounts for digital payments?",
				answer:
					"Yes, many banks and wallets offer discounts or cashback for payments made via UPI, net banking, or digital wallets like Paytm or PhonePe. Check specific offers, as these are often limited to certain merchants or purchase types.",
			},
		],
	},
	{
		section: "Online Learning Discounts FAQs",
		questions: [
			{
				question: "How do cashback offers work with credit cards?",
				answer:
					"Use the discount code during checkout on popular online learning platforms like Coursera, Udemy, or Skillshare. Some platforms also offer discounts during sign-up or as part of seasonal promotions.",
			},
			{
				question: "Can I get banking discounts for international purchases?",
				answer:
					"Yes, many platforms offer free courses or trial periods. Check our free courses section or sign up on platforms that frequently offer free classes, especially during sales or promotional periods.",
			},
			{
				question: "Are there discounts for digital payments?",
				answer:
					"n many cases, discounted courses come with certifications. However, some platforms charge separately for certificates, so check the course details on the provider’s website.",
			},
		],
	},
	{
		section: "Electronics Discounts FAQs",
		questions: [
			{
				question: "How do cashback offers work with credit cards?",
				answer:
					"Some discounts apply only to select electronics brands or items (like smartphones, laptops, or accessories). Review each discount’s terms to know which products qualify.",
			},
			{
				question: "Can I get banking discounts for international purchases?",
				answer:
					"Yes, many retailers offer refurbished products at a discount. Check the electronics section on our site to see available deals on refurbished items, which can be an affordable alternative to new items.",
			},
			{
				question: "Are there discounts for digital payments?",
				answer:
					"Double-check the discount terms, including expiration date and eligible product categories. If you have issues, confirm on the retailer’s website or contact their customer service for help.",
			},
		],
	},
	// ... other sections here
];

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAnswer = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div id="wrapper">
			<Navbar />

			<div className="faq-container">
				{faqData.map((section, sectionIndex) => (
					<div key={sectionIndex} className="faq-section">
						<h3 className="faq-heading">{section.section}</h3>
						<ul className="faq-list">
							{section.questions.map((item, index) => (
								<li
									key={index}
									className="faq-item"
									onClick={() => toggleAnswer(`${sectionIndex}-${index}`)}
								>
									<div className="faq-question">
										{item.question}
										<span>
											{activeIndex === `${sectionIndex}-${index}` ? "▲" : "▼"}
										</span>
									</div>
									<div
										className={`faq-answer ${
											activeIndex === `${sectionIndex}-${index}` ? "active" : ""
										}`}
									>
										{item.answer}
									</div>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<Footer />
		</div>
	);
};

export default FAQ;
