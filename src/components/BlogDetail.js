import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import "../styles/BlogDetail.css";

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogDetail = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/blogging/blogs/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch blog details");
                }
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogDetail();
    }, [id]);

    if (loading) {
        return (
            <div id="wrapper">
                <Navbar />
                <div className="container">
                    <p className="loading-message">Loading blog...</p>
                </div>
                <Footer />
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div id="wrapper">
                <Navbar />
                <div className="container">
                    <div className="error-container">
                        <p className="error-message">Blog not found!</p>
                    </div>
                    <NewsLetter />
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div id="wrapper">
            <Navbar />
            <div className="container">
                <div className="blog-detail-container">
                    <h1 className="blog-title">{blog.title}</h1>
                    <div className="writer-info">
                        <p className="writer-name">{blog.heading}</p>
                    </div>
                    <div className="blog-writer">
                        <img src={blog.image} alt={blog.heading} className="blog-image" />
                    </div>

                    <div className="blog-content">
                        {blog.description.split("\n").map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <NewsLetter />
            </div>
            <Footer />
        </div>
    );
};

export default BlogDetail;
