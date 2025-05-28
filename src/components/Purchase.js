import React from 'react';
import '../styles/Purchase.css' ;
import Navbar from './Navbar';
import Footer from './Footer';

const Purchase = () => {
  return (
    <div id="wrapper">
      <Navbar />
    <div className="purchase-container">
      {/* Left Section */}
      <div className="course-details">
        <div className="overview-tab">
          Overview
        </div>
        
        <div className="course-info">
          <h2 className="course-title">Mathematics for beginners</h2>
          
          <div className="rating">
            <span className="rating-score">4.2 out of 5</span>
            <div className="stars">
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star">★</span>
            </div>
          </div>
          
          <p className="course-description">
            Basic math for beginners encompasses fundamental arithmetic operations like addition, subtraction, multiplication, and division, along with concepts like fractions, decimals, percentages, and ratios. Understanding these basics is crucial for building a strong foundation in math and progressing to more advanced topics
          </p>
          
          <div className="course-image">
            <img src="/api/placeholder/300/200" alt="Mathematics illustration with calculator, ruler, and geometric shapes" />
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="purchase-section">
        <div className="course-preview">
          <img src="/api/placeholder/120/80" alt="Course preview" className="preview-image" />
        </div>
        
        <div className="pricing">
          <div className="current-price">Rs 2000</div>
          <div className="original-price">Rs 4000</div>
          <div className="discount-text">11 hour left at this price</div>
        </div>
        
        <button className="purchase-btn">Add to Cart</button>
        
        <div className="course-includes">
          <h4>This Course Included</h4>
          <ul>
            <li>📱 Lifetime access</li>
            <li>📋 Certificate of completion</li>
            <li>📚 45 Modules</li>
          </ul>
        </div>
        
        <div className="training-info">
          <h4>Training 5 or more people</h4>
          <p>Get your team access to over 19,000 top courses, anytime, anywhere. Try Business Premium</p>
        </div>
        
        <div className="share-section">
          <h4>Share this course</h4>
          <div className="social-icons">
            <span className="social-icon facebook">f</span>
            <span className="social-icon twitter">t</span>
            <span className="social-icon linkedin">in</span>
            <span className="social-icon whatsapp">w</span>
            <span className="social-icon telegram">tg</span>
            <span className="social-icon copy">⎘</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Purchase;