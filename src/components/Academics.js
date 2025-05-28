import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Academics.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Academics = () => {
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    navigate('/purchase', { state: { course } });
  };
  const nonAcademicCourses = [
    {
      id: 101,
      title: 'Music Theory',
      rating: 4.7,
      price: 3500,
      originalPrice: 5000,
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a5d4?w=400&h=200&fit=crop'
    },
    {
      id: 102,
      title: 'Digital Art',
      rating: 4.5,
      price: 4000,
      originalPrice: 6000,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=200&fit=crop'
    },
    {
      id: 103,
      title: 'Public Speaking',
      rating: 4.8,
      price: 3200,
      originalPrice: 4800,
      image: 'https://images.unsplash.com/photo-1505373879543-eee7d606739a?w=400&h=200&fit=crop'
    },
    {
      id: 104,
      title: 'Photography',
      rating: 4.6,
      price: 3800,
      originalPrice: 5500,
      image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=200&fit=crop'
    },
    {
      id: 105,
      title: 'Yoga & Meditation',
      rating: 4.9,
      price: 3000,
      originalPrice: 4500,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop'
    },
    {
      id: 106,
      title: 'Creative Writing',
      rating: 4.4,
      price: 2800,
      originalPrice: 4200,
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=200&fit=crop'
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Maths for beginners",
      rating: 4.2,
      price: 2000,
      originalPrice: 4000,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Maths for intermediates",
      rating: 4.2,
      price: 2000,
      originalPrice: 4000,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Computer for grade 6-10",
      rating: 4.2,
      price: 2500,
      originalPrice: 5000,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Physics fundamentals",
      rating: 4.5,
      price: 2200,
      originalPrice: 4400,
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Chemistry basics",
      rating: 4.3,
      price: 2100,
      originalPrice: 4200,
      image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      title: "English grammar",
      rating: 4.1,
      price: 1800,
      originalPrice: 3600,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=200&fit=crop"
    },
    {
      id: 7,
      title: "Biology essentials",
      rating: 4.4,
      price: 2300,
      originalPrice: 4600,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop"
    },
    {
      id: 8,
      title: "History world wars",
      rating: 4.0,
      price: 1900,
      originalPrice: 3800,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop"
    },
    {
      id: 9,
      title: "Geography climate",
      rating: 4.2,
      price: 2000,
      originalPrice: 4000,
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=200&fit=crop"
    },
    {
      id: 10,
      title: "Art and creativity",
      rating: 4.6,
      price: 2400,
      originalPrice: 4800,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div id="wrapper">
      <Navbar />

      <div className="academics-container">
        <div className="academics-header">
          <h1 className="academics-title">ACADEMIC COURSES</h1>
        </div>
        
        <div className="courses-grid">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="course-card"
              onClick={() => handleCourseClick(course)}
              style={{ cursor: 'pointer' }}
            >
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
              
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                
                <div className="course-details">
                  <div className="rating">
                    <span className="star">⭐</span>
                    <span className="rating-value">{course.rating}</span>
                  </div>
                  
                  <div className="pricing">
                    <span className="rupee-symbol">₹</span>
                    <span className="current-price">{course.price.toLocaleString()}</span>
                    <span className="original-price">₹ {course.originalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="academics-header" style={{ marginTop: '60px' }}>
          <h1 className="academics-title">NON-ACADEMIC COURSES</h1>
        </div>
        
        <div className="courses-grid">
          {nonAcademicCourses.map((course) => (
            <div 
              key={course.id} 
              className="course-card"
              onClick={() => handleCourseClick(course)}
              style={{ cursor: 'pointer' }}
            >
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
              
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                
                <div className="course-details">
                  <div className="rating">
                    <span className="star">⭐</span>
                    <span className="rating-value">{course.rating}</span>
                  </div>
                  
                  <div className="pricing">
                    <span className="rupee-symbol">₹</span>
                    <span className="current-price">{course.price.toLocaleString()}</span>
                    <span className="original-price">₹ {course.originalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Academics;