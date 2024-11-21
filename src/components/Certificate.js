import React, { useState } from "react";
import "../styles/Certificate.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image from "../assets/certi.png";
import { useNavigate } from "react-router-dom";

const Certificate = () => {
	const navigate = useNavigate();
	const [serialNo, setSerialNo] = useState();

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
								<div className="cf_heading">Get your certificate </div>
								<div className="cf_header_text">
									Verify now to get certified
								</div>
							</div>
							<div className="cf_inputs">
								<div className="labels_group">
									<label className="cf_label" htmlFor="serial_number">
										Serial Number
									</label>
									<div className="certificate_input">
										<input
											type="text"
											id="serial_number"
											placeholder="Enter Your Serial Number"
											value={serialNo}
											onChange={(e) => setSerialNo(e.target.value)}
										/>
									</div>
								</div>
								<div className="labels_group">
									<label className="cf_label" htmlFor="name">
										Candidate Name
									</label>
									<div className="certificate_input">
										<input type="text" id="name" placeholder="Name" />
									</div>
								</div>
								<div
									className="cf_button"
									onClick={() => {
										navigate(`/certificate_verified/${serialNo}`);
									}}
								>
									Submit
								</div>
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

export default Certificate;
