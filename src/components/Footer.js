import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to top instead of reloading
  };
  const handleIntern = () => {
    window.open(
      "https://www.linkedin.com/company/unlockdiscounts/jobs/",
      "_blank"
    );
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer-container">
      <div className="footer-content-wrapper">
        <div className="footer-text-container">
          <div className="footer-column-container">
            <div className="footer-column-heading">Fashion</div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/products/Mens")}
            >
              Men's Wear
            </div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/products/Women")}
            >
              Women's Wear
            </div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/products/Kids")}
            >
              Kids' Wear
            </div>
          </div>
          <div className="footer-column-container">
            <div className="footer-column-heading">Electronics</div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/products/Electronics")}
            >
              Mobile and Accessories
            </div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/products/health_care")}
            >
              Health Care
            </div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/products/Home_Appliances")}
            >
              Home Appliances
            </div>
          </div>
          <div className="footer-column-container">
            <div className="footer-column-heading">Banking</div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/banking")}
            >
              Zero Saving Accounts
            </div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/banking")}
            >
              Credit Cards
            </div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/banking")}
            >
              Saving Applications
            </div>
          </div>
          <div className="footer-column-container">
            <div className="footer-column-heading">Online Learning</div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/online_learning")}
            >
              Courses
            </div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/online_learning")}
            >
              Colleges
            </div>
            <div className="footer-column-text" onClick={handleIntern}>
              Internships
            </div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/certificate_verification")}
            >
              Certificate Verification
            </div>
          </div>
          <div className="footer-column-container">
            <div className="footer-column-heading">Company</div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/aboutUS")}
            >
              About Us
            </div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/contactUS")}
            >
              Contact Us
            </div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/faq")}
            >
              FAQs
            </div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/blog")}
            >
              Blogs
            </div>
            <div
              className="footer-column-text"
              onClick={() => handleNavigation("/user_guides")}
            >
              User Guides
            </div>
          </div>
        </div>
        <div className="footer-bottom-section">
          <div className="footer-terms">
            <p className="footer-terms-text">
              © 2024-2025 UnlockDiscounts, Inc.
            </p>
            <p className="footer-terms-dot">•</p>
            <p className="footer-terms-text">Privacy</p>
            <p className="footer-terms-dot">•</p>
            <p className="footer-terms-text">Terms and Conditions</p>
            <p className="footer-terms-dot">•</p>
            <p className="footer-terms-text">Sitemap</p>
          </div>
          <div className="footer-social-container">
            <p className="footer-social-heading">Connect With Us</p>
            <FaFacebook
              className="footer-social-logo"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/people/UnlockDiscounts/61560425212006/?mibextid=ZbWKwL",
                  "_blank"
                )
              }
            />
            <FaInstagram
              className="footer-social-logo"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/unlock_discounts/",
                  "_blank"
                )
              }
            />
            <FaLinkedin
              className="footer-social-logo"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/unlockdiscounts/posts/?feedView=all",
                  "_blank"
                )
              }
            />
            <FaYoutube
              className="footer-social-logo"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@UnlockDiscounts",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
