import React from "react";
import { Link } from "react-router-dom"; 
import Writter from "../assets/Writter-image.png";
import HeroBlogsData from "../data/BlogHeroData";

const BlogsHeroLeft = () => {
    const blog = HeroBlogsData[0]; 

    return (
        <div className="Blogs-hero-section-left">
            <div>
                <p className="Blogs-tagline">Newest Blog {blog.time}</p>
                <h2 className="Blogs-hero-heading">{blog.title}</h2>
                <p className="Blogs-hero-description">{blog.description}</p>
                <Link to={`/blog/${blog.BlogId}`}>
                    <button className="Blogs-hero-button">Read More</button>
                </Link>
            </div>
            <div className="Blogs-writter-container-desktop">
                <img alt="writer" src={blog.writer.writer_image} className="Blogs-writter-image-desktop"/>
                <div className="Blogs-writter-name-container-desktop">
                    <p className="Blogs-written-by-desktop">Written by</p>
                    <span className="Blogs-writter-name-desktop">{blog.writer.writer_name}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogsHeroLeft;
