import React from "react";
import verified from "../assets/Verified.svg";
import image from "../assets/certi.png";
import "../styles/Certificate.css";
import "../styles/Verified.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const VerifiedPage = () => {
	const data = {
		serialNumber: 123456789,
		candidateName: "Conrad Hawkins",
		internshipStartDate: "20-01-2024",
		internshipEndDate: "10-05-2024",
	};

	return (
		<div id="wrapper">
			<Navbar />
			<div className="certificate_container">
				<div className="certificate_heading">
					<div className="certificate_heading_text">
						Verify The Authenticity of The Certificate
					</div>
				</div>
				<div className="certificate_hero">
					<div className="certificate_left">
						<div className="certificate_form">
							<div className="cf_header">
								<div className="cf_heading">
									Verified <img src={verified} />
								</div>
								<div className="cf_header_text">
									The Certificate is verified
								</div>
							</div>
							<div className="verified_data">
								<div className="data_container">
									<div className="data_text_container">
										<div className="data_head">Serial Number : </div>
										<div className="data_input">{data.serialNumber}</div>
									</div>
									<div className="data_text_container">
										<div className="data_head">Candidate Name : </div>
										<div className="data_input">{data.candidateName}</div>
									</div>
									<div className="data_text_container">
										<div className="data_head">Internship Start Date : </div>
										<div className="data_input">{data.internshipStartDate}</div>
									</div>
									<div className="data_text_container">
										<div className="data_head">Internship End Date : </div>
										<div className="data_input">{data.internshipEndDate}</div>
									</div>
								</div>
								<div className="cf_button">Generate Certificate</div>
							</div>
						</div>
					</div>
					<div className="certificate_right">
						<div className="certificate_image">
							<img src={image} alt="Certificate" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default VerifiedPage;
