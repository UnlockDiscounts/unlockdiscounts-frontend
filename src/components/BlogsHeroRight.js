import Writter from '../assets/Writter-image.png';
import BlogImg from '../assets/Blog_Image.jpg'
const BlogsHeroRight = () => {
	
	return (
		<div className="Blogs-hero-section-right">
		<img
		  className="Blogs-hero-img"
		  alt="hero"
		  src={BlogImg}
		/>
		<div className="Blogs-img">
		  <div className="Blogs-writter-container">
			<img
			  alt="writter"
			  src={Writter}
			  className="Blogs-writter-image"
			/>
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
