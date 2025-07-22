import React, { useEffect, useState } from "react";
import "../styles/TopBlogs.css";
import TopBlogsItems from "./TopBlogsItems";

const TopBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopBlogs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/blogging/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch top blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopBlogs();
  }, []);

  if (loading) {
    return <p className="loading-message">Loading top blogs...</p>;
  }

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  return (
    <>
      <h1 className="top_blog_heading-desktop">Top Blogs</h1>
      <ul className="top_blog_wrapper">
        <div className="top_blog_tag_container">
          <h1 className="top_blog_heading">Top Blogs</h1>
          <p className="top_blog_des">
            Discover the most popular blogs covering tech, trends, and more!
          </p>
        </div>
        {blogs.slice(0, 4).map((blogItem) => (
        <TopBlogsItems key={blogItem._id} blogsData={blogItem} />
        ))}
      </ul>
    </>
  );
};

export default TopBlogs;
