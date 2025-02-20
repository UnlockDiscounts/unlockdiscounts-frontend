import React, { useState } from "react";
import "../styles/ContactUs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <main className="contact-main">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-wrapper">
          <section className="contact-info-section">
            <p className="contact-description">
              We'd love to hear from you! At UnlockDiscounts, your questions and
              feedback are important to us. Whether you have a query about our
              discounts, suggestions, or need help, we're here to assist.
            </p>

            <p className="contact-social">
              Join our WhatsApp community for real-time exclusive deals, and
              stay updated by following us on Facebook, Twitter, and Instagram.
            </p>

            <p className="contact-email">
              Reach us at support@unlockdiscounts.com
            </p>

            <p className="contact-thank-you">
              Thank you for choosing UnlockDiscounts we look forward to
              connecting with you!
            </p>
          </section>

          <section className="contact-form-section">
            <h2 className="contact-form-title">Get in Touch</h2>
            <p className="contact-form-subtitle">You can reach us anytime</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-name-group">
                <input
                  type="text"
                  name="firstName"
                  className="contact-input"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  className="contact-input"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-input-group">
                <input
                  type="email"
                  name="email"
                  className="contact-input"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-input-group contact-phone-group">
                <span className="contact-country-code">+91</span>
                <input
                  type="tel"
                  name="phone"
                  className="contact-input contact-phone-input"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-input-group">
                <textarea
                  name="message"
                  className="contact-textarea"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <span className="contact-char-count">
                  {formData.message.length}/120
                </span>
              </div>

              <button type="submit" className="contact-submit-btn">
                Submit
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
