import React from "react";
import Writter from "../assets/Writter-image.png";

const BlogsHeroRight = () => {
	return (
		<div className="Blogs-hero-section-right">
			<img
				className="Blogs-hero-img"
				alt="hero"
				src="https://res.cloudinary.com/dufyrxyey/image/upload/v1733420326/dbd2c4fb68b18d0894a7e640570ac14d_qttc02.jpg"
			/>
			<div className="Blogs-img">
				<div className="Blogs-writter-container">
					<img alt="writter" src={Writter} className="Blogs-writter-image" />
					<div className="Blogs-writter-name-container">
						<p className="Blogs-written-by">Written by</p>
						<span className="Blogs-writter-name">Johny cotton man</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogsHeroRight;
