import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBlogs from "../components/TopBlogs";
import LatestBlogs from "../components/LatestBlogs";
import NewsLetter from "../components/NewsLetter";
import TopBlogsData from "../data/TopBlogs"; // Import dummy TopBlogs data
import LatestBlogsData from "../data/LatestBlogsData"; // Import dummy LatestBlogs data

const CategoryPage = () => {
  const { category_name } = useParams();
  
  // Check if category_name is defined, else fallback to empty string
  const formattedCategory = category_name 
    ? category_name.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) 
    : "";

  const [filteredLatestBlogs, setFilteredLatestBlogs] = useState([]);
  const [filteredTopBlogs, setFilteredTopBlogs] = useState([]);

  useEffect(() => {
    if (formattedCategory) {
      // Filter LatestBlogsData and TopBlogsData based on category (tag)
      const latestFiltered = LatestBlogsData.filter(blog =>
        blog.tags && blog.tags.includes(formattedCategory)
      );
      const topFiltered = TopBlogsData.filter(blog =>
        blog.tags && blog.tags.includes(formattedCategory)
      );

      setFilteredLatestBlogs(latestFiltered);
      setFilteredTopBlogs(topFiltered);
    }
  }, [formattedCategory]);

  return (
    <div id="wrapper">
      <Navbar />
      <div className="container">
        <div className="category-heading">
          <h1>{formattedCategory}</h1>
        </div>
        {/* Passing filtered blogs to components */}
        <LatestBlogs blogs={filteredLatestBlogs} />
        <TopBlogs blogs={filteredTopBlogs} />
        <NewsLetter />
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
