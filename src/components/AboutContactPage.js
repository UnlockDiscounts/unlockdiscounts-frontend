import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/AboutContactPage.css';

const AboutUs = () => (
  <div className="card">
    <p>
      Welcome to <strong>UnlockDiscounts</strong>—Your Go-To Destination for Incredible Deals on a Variety of Products!
    </p>
    <p>
      At UnlockDiscounts, we are dedicated to helping you save money on your favorite brands and products. Our platform is designed to provide you with the most current and exclusive discount codes, deals, and promotional offers, making your shopping experience not only enjoyable but also budget-friendly.
    </p>
    <h3 className="sub-title">Our Mission</h3>
    <p>
      Our mission is simple: to empower shoppers like you by making savings accessible. We strive to provide a user-friendly experience, allowing you to effortlessly find and apply discounts across a variety of categories—from fashion to electronics and beyond.
    </p>
  </div>
);

const ContactUs = () => (
  <div className="card">
    <p><strong>We’d love to hear from you!</strong></p>
    <p>
    Welcome to UnlockDiscounts—Your Go-To Destination for Incredible Deals on a Variety of Products!
At UnlockDiscounts, we are dedicated to helping you save money on your favorite brands and products. Our platform is designed to provide you with the most current and exclusive discount codes, deals, and promotional offers, making your shopping experience not only enjoyable but also budget-friendly.

Our Mission
Our mission is simple: to empower shoppers like you by making savings accessible. We strive to provide a user-friendly experience, allowing you to effortlessly find and apply discounts across a variety of categories—from fashion to electronics and beyond.
    </p>
    <p>
      You can reach us at <a href="mailto:support@unlockdiscounts.com" className="link">support@unlockdiscounts.com</a> or call us at <span>[Your Contact Number]</span>.
    </p>
    <p>
      Additionally, feel free to connect with us on social media to stay in the loop with the latest deals: follow us on 
      <a href="#" className="link"> Facebook</a>, 
      <a href="#" className="link"> Twitter</a>, and 
      <a href="https://www.instagram.com/unlock_discounts/" className="link"> Instagram</a>.
    </p>
    <p>Thank you for choosing UnlockDiscounts—we look forward to assisting you and connecting with you soon!</p>
  </div>
);

const AboutContactPage = () => (
  <div>
    <Navbar />
    <div className="page-container">
      <h2 className="section-title">About Us</h2>
      <AboutUs />
      <h2 className="section-title">Contact Us</h2>
      <ContactUs />
    </div>
    <Footer />
  </div>
);

export default AboutContactPage;
