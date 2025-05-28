// import React, { useState } from "react";
// import "../App.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import OnlineLearningNavbar from "./OnlineLearningNavbar";
import "../styles/OnlineLearning.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/OnlineLearning.css";
import heroImage from "../assets/Header.png"; 
import imgImage from "../assets/confident-teacher-explaining-lesson-pupils 1.png";
import { Pencil, Monitor, Briefcase, Image } from 'lucide-react';

const OnlineLearning = () => {
	const navigate = useNavigate();
	const [courseButton, setCourseButton] = useState(true);
	const [collegeButton, setCollegeButton] = useState(false);

	const handleExploreCourses = () => {
		navigate('/academics');
	};
	const categories = [
		{
		  id: 1,
		  icon: <Pencil size={24} />,
		  title: 'Design',
		  description: 'Structured design classes could be a helpful tool for a creative future.',
		  color: 'bg-blue-100'
		},
		{
		  id: 2,
		  icon: <Monitor size={24} />,
		  title: 'Development',
		  description: 'Learning from basic to advanced languages for a structured pattern of any application.',
		  color: 'bg-purple-100'
		},
		{
		  id: 3,
		  icon: <Briefcase size={24} />,
		  title: 'Business',
		  description: 'Developing the skills to upgrade the ethics of making money & growing capital.',
		  color: 'bg-teal-100'
		},
		{
		  id: 4,
		  icon: <Image size={24} />,
		  title: 'Photography',
		  description: 'This course would not only help in capturing moments but would upgrade your skills to help you in adjusting your content.',
		  color: 'bg-red-100'
		}
	  ];
	
	  const resources = [
		{
		  id: 1,
		  image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg",
		  tag: "Reading",
		  type: "resource"
		},
		{
		  id: 2,
		  image: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg",
		  title: "Super fun content in your everyday learning",
		  description: "Incorporating fun content into learning can significantly improve engagement and retention.",
		  type: "article"
		},
		{
		  id: 3,
		  image: "https://images.pexels.com/photos/6953870/pexels-photo-6953870.jpeg",
		  title: "A buzz to your ears & eyes with opt podcasts",
		  description: "Podcasts can be valuable tools in education, offering diverse learning experiences.",
		  type: "article"
		}
	  ];

	
	return (

<div id="wrapper">
	<Navbar />
<div className="thumbnails-container">
      <div className="thumbnails-section">
        <h2 className="section-title">Thumbnails To Explore</h2>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className={`icon-container ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="explore-section" onClick={handleExploreCourses} style={{ cursor: 'pointer' }}>
        <div className="main-banner">
          <img src={heroImage} alt="Explore Courses" />
        </div>

        <h2 className="resources-title">Useful Resources for everyday learning</h2>
        
        <div className="resources-grid">
          {resources.map((resource) => (
            <div key={resource.id} className={`resource-card ${resource.type === 'article' ? 'article-card' : ''}`}>
              <div className="resource-image">
                <img src={resource.image} alt={resource.title || "Learning resource"} />
                {resource.tag && <span className="resource-tag">{resource.tag}</span>}
              </div>
              
              {resource.type === 'article' && (
                <div className="article-content">
                  <h3 className="article-title">{resource.title}</h3>
                  <p className="article-description">{resource.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
         <div className="scroll-img">	 
			<img src={imgImage} alt="page" />
		 </div>
    
		<div className="explore-section">
  <h2 className="explore-courses-title">Explore Courses</h2>
</div>


      </div>
    </div>
	<Footer />	
	</div>
	);
};

export default OnlineLearning;







