import React from "react";
import "../styles/AboutUs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="about-main">
        <h1 className="about-title">About us</h1>

        <div className="about-container">
          <div className="about-left-column">
            <section className="about-card">
              <h2 className="about-section-title">
                Welcome to UnlockDiscounts, Your Go-To Destination for
                Incredible Deals on a Variety of Products!
              </h2>
              <p className="about-description">
                At UnlockDiscounts, we help you save on everything from fashion
                to electronics. We're dedicated to making shopping affordable
                and hassle-free by delivering curated, verified deals from top
                brands.
              </p>
            </section>

            <section className="about-card">
              <h2 className="about-section-title">Why Choose Us?</h2>
              <p className="about-description">
                At UnlockDiscounts, we save you time by curating only the best,
                verified deals, so you can shop confidently. Our platform is
                designed for ease of use, with regularly updated offers to
                ensure you never miss out on the latest savings. Join our
                community today and discover a smarter way to shop!
              </p>
            </section>
          </div>

          <div className="about-right-column">
            <section className="about-card">
              <h2 className="about-section-title">Our Mission</h2>
              <p className="about-description">
                Our mission is simple: to help you shop smarter. We provide
                reliable, up-to-date discounts so you can enjoy the products you
                love without breaking the bank.
              </p>
            </section>

            <section className="about-card">
              <h2 className="about-section-title">What We Offer</h2>
              <ul className="about-offer-list">
                <li>
                  Wide Range of Deals: Discounts on popular and niche products
                  alike.
                </li>
                <li>Verified Savings: Trusted, handpicked offers.</li>
                <li>
                  Updates: Regular deal refreshes to keep savings current.
                </li>
                <li>
                  Real-Time Notifications: Join our WhatsApp group and follow us
                  on social media to stay updated.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
