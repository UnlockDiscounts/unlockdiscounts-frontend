import React, { useEffect, useState } from "react";
import "../styles/TopBlogs.css";
import LatestBlogsItems from "./LatestBlogsItems";

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/blogging/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog list");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="loading-message">Loading blogs...</p>;
  }

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  return (
    <>
      <h1 className="top_blog_heading-desktop">Latest Blogs</h1>
      <ul className="top_blog_wrapper">
      
        {blogs.map((blogItem) => (
          <LatestBlogsItems key={blogItem._id} blogsData={blogItem} />
        ))}
      </ul>
    </>
  );
};

export default LatestBlogs;
