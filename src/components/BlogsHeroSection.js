import BlogsHeroLeft from "./BlogsHeroLeft";
import BlogsHeroRight from "./BlogsHeroRight";
import "../styles/BlogsHeroSection.css";

const BlogsHeroSection = () => {
	return (
		<div className="Blogs-hero-section">
			<BlogsHeroLeft />
			<BlogsHeroRight />
		</div>
	);
};

export default BlogsHeroSection;
