import React from "react";
import Writter from '../assets/Writter-image.png';

const BlogsHeroLeft= () => {

	return (
		<div className="Blogs-hero-section-left">
				<div>
				<p className="Blogs-tagline">Newest Blog 4 Min</p>
				<h2 className="Blogs-hero-heading">The Art of Home Transformation</h2>
				<p className="Blogs-hero-description">Explore innovative ideas and trendy decor to elevate your living spaces.</p>
				<button className="Blogs-hero-button">Read More</button>
				</div>
				<div className="Blogs-writter-container-desktop">
				<img alt="writter" src={Writter} className="Blogs-writter-image-desktop"/>
				<div className="Blogs-writter-name-container-desktop">
					<p className="Blogs-written-by-desktop">Written by</p>
					<span className="Blogs-writter-name-desktop">Johny cotton man</span>
				</div>
			</div>
		</div>
	);
};

export default BlogsHeroLeft;
