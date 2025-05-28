// import React from 'react';
// import './ThumbnailsToExplore.css';

// const ThumbnailsToExplore = () => {
//   const thumbnails = [
//     {
//       id: 1,
//       title: 'Design',
//       description: 'Structured design classes would be a helpful tool for a creative future.',
//       icon: '✏️',
//       bgColor: 'bg-blue-100',
//       iconBg: 'bg-blue-200'
//     },
//     {
//       id: 2,
//       title: 'Development',
//       description: 'Learning from basic to advanced languages for a structured pattern of any application.',
//       icon: '💻',
//       bgColor: 'bg-purple-100',
//       iconBg: 'bg-purple-200'
//     },
//     {
//       id: 3,
//       title: 'Business',
//       description: 'Developing the skills to upgrade the ethics of making money & growing capital.',
//       icon: '💼',
//       bgColor: 'bg-teal-100',
//       iconBg: 'bg-teal-200'
//     },
//     {
//       id: 4,
//       title: 'Photography',
//       description: 'This course would not only help in capturing moments but would upgrade your skills to help you in adjusting your cameras.',
//       icon: '📷',
//       bgColor: 'bg-red-100',
//       iconBg: 'bg-red-200'
//     }
//   ];

//   const resources = [
//     {
//       id: 1,
//       title: 'Super fun content in your everyday learning',
//       description: 'Incorporating fun content into learning can significantly improve engagement and retention.',
//       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop'
//     },
//     {
//       id: 2,
//       title: 'A feast to your ears & eyes with our podcasts',
//       description: 'Podcasts can be valuable tools in education, offering diverse learning opportunities.',
//       image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop'
//     }
//   ];

//   return (
//     <div className="thumbnails-container">
//       {/* Header */}
//       <header className="header">
//         <div className="logo">
//           <div className="logo-icon">LD</div>
//         </div>
//         <nav className="nav">
//           <a href="#" className="nav-link">Categories ▼</a>
//           <a href="#" className="nav-link">Men</a>
//           <a href="#" className="nav-link">Women</a>
//           <a href="#" className="nav-link">Kids</a>
//           <a href="#" className="nav-link">New Arrivals</a>
//           <a href="#" className="nav-link active">Online Learning</a>
//         </nav>
//         <button className="sign-up-btn">Sign up / Login</button>
//       </header>

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Left Section - Thumbnails */}
//         <div className="left-section">
//           <h2 className="section-title">Thumbnails To Explore</h2>
//           <div className="thumbnails-grid">
//             {thumbnails.map((thumbnail) => (
//               <div key={thumbnail.id} className={`thumbnail-card ${thumbnail.bgColor}`}>
//                 <div className={`thumbnail-icon ${thumbnail.iconBg}`}>
//                   {thumbnail.icon}
//                 </div>
//                 <h3 className="thumbnail-title">{thumbnail.title}</h3>
//                 <p className="thumbnail-description">{thumbnail.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Center Section - Hero */}
//         <div className="center-section">
//           <div className="hero-card">
//             <div className="hero-content">
//               <h2 className="hero-title">
//                 <span className="highlight">Reading</span> Online is now much easier
//               </h2>
//               <p className="hero-description">
//                 Here at Lovable Discoveries we are offering the most comprehensive online classes available. Our personalized learning methodology.
//               </p>
//               <div className="hero-buttons">
//                 <button className="btn-primary">Get Started</button>
//                 <button className="btn-secondary">
//                   <span className="play-icon">▶</span>
//                   Watch how it works
//                 </button>
//               </div>
//             </div>
//             <div className="hero-image">
//               <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" alt="Learning Online" />
//               <div className="notification-cards">
//                 <div className="notification-card">
//                   <span className="notification-icon">📊</span>
//                   <div>
//                     <div className="notification-title">2500+</div>
//                     <div className="notification-subtitle">Student Reviews</div>
//                   </div>
//                 </div>
//                 <div className="notification-card congratulations">
//                   <span className="notification-icon">🎉</span>
//                   <div>
//                     <div className="notification-title">Congratulations</div>
//                     <div className="notification-subtitle">Your admission completed</div>
//                   </div>
//                 </div>
//                 <div className="notification-card experience">
//                   <span className="notification-icon">👤</span>
//                   <div>
//                     <div className="notification-title">User Experience Class</div>
//                     <div className="notification-subtitle">Today at 12.00 PM</div>
//                     <button className="join-btn">Join Now</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Explore Courses */}
//         <div className="right-section">
//           <h2 className="section-title">Explore Courses</h2>
//           <div className="resources-section">
//             <h3 className="resources-title">Useful Resources for everyday learning</h3>
//             <div className="resources-grid">
//               {resources.map((resource) => (
//                 <div key={resource.id} className="resource-card">
//                   <img src={resource.image} alt={resource.title} className="resource-image" />
//                   <div className="resource-content">
//                     <h4 className="resource-title">{resource.title}</h4>
//                     <p className="resource-description">{resource.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="laptop-image">
//               <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop" alt="Laptop with code" />
//               <div className="reading-badge">Reading</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThumbnailsToExplore;

import React from 'react';
import { Pencil, Monitor, Briefcase, Image } from 'lucide-react';
import './ThumbnailsToExplore.css';

const ThumbnailsToExplore = () => {
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

      <div className="explore-section">
        <div className="main-banner">
          <div className="banner-content">
            <span className="orange-badge">NEW!</span>
            <h2 className="banner-title">Online is now much easier</h2>
            <p className="banner-description">
              New at Udemy? Courses are on offering you limited time pricing options to upgrade your learning methodology.
            </p>
            <div className="banner-buttons">
              <button className="join-btn">Join for free</button>
              <button className="watch-btn">
                <span className="play-icon">▶</span>
                Watch how it works
              </button>
            </div>
            
            <div className="banner-badges">
              <div className="student-badge">
                <span className="badge-icon">👨‍🎓</span>
                <div className="badge-content">
                  <span className="badge-label">200k</span>
                  <span className="badge-text">Certified Student</span>
                </div>
              </div>
              
              <div className="congrats-badge">
                <span className="badge-icon">🎓</span>
                <div className="badge-content">
                  <span className="badge-label">Congratulations</span>
                  <span className="badge-text">Your admission accepted</span>
                </div>
              </div>
              
              <div className="user-badge">
                <span className="badge-icon">👤</span>
                <div className="badge-content">
                  <span className="badge-label">User Experience Class</span>
                  <span className="badge-text">Today at 11:00 PM</span>
                </div>
                <button className="join-now-btn">Join Now</button>
              </div>
            </div>
          </div>
          <div className="banner-image">
            <img 
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg" 
              alt="Student with learning materials" 
            />
          </div>
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
        
        <h2 className="explore-courses-title">Explore Courses</h2>
      </div>
    </div>
  );
};

export default ThumbnailsToExplore;
