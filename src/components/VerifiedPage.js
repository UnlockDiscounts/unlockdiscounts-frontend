import React, { useEffect, useState } from "react";
import verified from "../assets/Verified.svg";
import image from "../assets/certi.png";
import "../styles/Certificate.css";
import "../styles/Verified.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const VerifiedPage = () => {
	const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
	const { serialNo } = useParams();
	const [verifiedData, setVerifiedData] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		sendRequest();
	}, [serialNo]);

	async function sendRequest() {
		try {
			const res = await axios.get(
				`${BACKEND_URL}/api/verificationCertificate?serialNo=${serialNo}`
			);
			console.log(res);
			if (res.status === 200) {
				setVerifiedData(res.data);
			} else {
				alert("Error");
			}
		} catch (error) {
			navigate(`/certificate_verification/${true}`);
			console.log(error);
		}
	}

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
							{verifiedData && (
								<div className="verified_data">
									<div className="data_container">
										<div className="data_text_container">
											<div className="data_head">Serial Number : </div>
											<div className="data_input">{verifiedData.serialNo}</div>
										</div>
										<div className="data_text_container">
											<div className="data_head">Candidate Name : </div>
											<div className="data_input">{verifiedData.name}</div>
										</div>
										<div className="data_text_container">
											<div className="data_head">Internship Start Date : </div>
											<div className="data_input">
												{new Date(verifiedData.startDate).toLocaleDateString()}
											</div>
										</div>
										<div className="data_text_container">
											<div className="data_head">Internship End Date : </div>
											<div className="data_input">
												{new Date(verifiedData.endDate).toLocaleDateString()}
											</div>
										</div>
									</div>
								</div>
							)}
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
