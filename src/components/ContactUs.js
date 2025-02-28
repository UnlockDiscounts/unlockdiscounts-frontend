import React, { useState } from "react";
import "../styles/ContactUs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) {
          error = `${name === "firstName" ? "First" : "Last"} name is required`;
        } else if (!/^[A-Za-z]+$/.test(value.trim())) {
          error = `${name === "firstName" ? "First" : "Last"} name must contain only alphabets`;
        } else if (value.trim().length < 2) {
          error = `${name === "firstName" ? "First" : "Last"} name must be at least 2 characters`;
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Invalid email address";
        }
        break;

      case "phone":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!/^\d{10}$/.test(value)) {
          error = "Phone number must be exactly 10 digits";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        } else if (value.trim().length > 120) {
          error = "Message cannot exceed 120 characters";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent typing numbers in First Name and Last Name
    if ((name === "firstName" || name === "lastName") && /[^A-Za-z]/.test(value)) {
      return;
    }

    // Prevent typing anything except digits in Phone Number
    if (name === "phone" && /[^0-9]/.test(value)) {
      return;
    }

    // Limit message length to 120 characters
    if (name === "message" && value.length > 120) {
      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validate the field as user types
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate all fields
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      newErrors[field] = error;

      if (error) {
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      toast.success("Thank you for contacting us! We'll get back to you soon.");

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      toast.error("Please fix the errors before submitting.");
    }
  };

  return (
    <>
      <Navbar />
      <Toaster />
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
              Thank you for choosing UnlockDiscounts! We look forward to
              connecting with you.
            </p>
          </section>

          <section className="contact-form-section">
            <h2 className="contact-form-title">Get in Touch</h2>
            <p className="contact-form-subtitle">You can reach us anytime</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-name-group">
                <div className="contact-input-container">
                  <input
                    type="text"
                    name="firstName"
                    className={`contact-input ${errors.firstName ? "contact-input-error" : ""}`}
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <span className="contact-error-message">{errors.firstName}</span>}
                </div>

                <div className="contact-input-container">
                  <input
                    type="text"
                    name="lastName"
                    className={`contact-input ${errors.lastName ? "contact-input-error" : ""}`}
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <span className="contact-error-message">{errors.lastName}</span>}
                </div>
              </div>

              <div className="contact-input-container">
                <input
                  type="email"
                  name="email"
                  className={`contact-input ${errors.email ? "contact-input-error" : ""}`}
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="contact-error-message">{errors.email}</span>}
              </div>

              <div className="contact-input-container">
                <input
                  type="tel"
                  name="phone"
                  className={`contact-input ${errors.phone ? "contact-input-error" : ""}`}
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="contact-error-message">{errors.phone}</span>}
              </div>

              <div className="contact-input-container">
                <textarea
                  name="message"
                  className={`contact-textarea ${errors.message ? "contact-input-error" : ""}`}
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={handleChange}
                />
                <span className={`contact-char-count ${formData.message.length > 120 ? "contact-char-count-error" : ""}`}>
                  {formData.message.length}/120
                </span>
                {errors.message && <span className="contact-error-message">{errors.message}</span>}
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
