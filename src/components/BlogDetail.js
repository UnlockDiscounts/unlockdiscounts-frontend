import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import LatestBlogsData from "../data/LatestBlogsData";
import TopBlogsData from "../data/TopBlogs";
import "../styles/BlogDetail.css";

const BlogDetail = () => {
    const { id } = useParams();
    const blogFromLatest = LatestBlogsData.find(blog => blog.BlogId === parseInt(id));
    const blogFromTop = TopBlogsData.find(blog => blog.BlogId === parseInt(id));

    const blog = blogFromLatest || blogFromTop;

    if (!blog) {
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
                    <p className="blog-description">{blog.description}</p>

                    <div className="blog-writer">
                        <img
                            src={blog.writer.writer_image}
                            alt={blog.writer.writer_name}
                            className="writer-image"
                        />
                        <div className="writer-info">
                            <p className="writer-name">{blog.writer.writer_name}</p>
                            <p className="blog-time">{blog.time}</p>
                        </div>
                    </div>

                    {/* Render Images */}
                    {blog.images && blog.images.length > 0 && (
                        <div className="blog-images-grid">
                            {blog.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Blog image ${index + 1}`}
                                    className="blog-image"
                                />
                            ))}
                        </div>
                    )}

                    {/* Render Blog Content */}
                    <div className="blog-content">
                        {blog.content.split("\n").map((paragraph, index) => (
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
