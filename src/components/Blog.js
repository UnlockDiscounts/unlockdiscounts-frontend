import "../App.css";
import CategoriesScroll from "./CategoriesScroll";
import NewsLetter from "./NewsLetter";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBlogs from "./TopBlogs";
import LatestBlogs from "./LatestBlogs";
import BlogsHeroSection from "./BlogsHeroSection";
import Catgories from "./Catgories";

const Blog = () => {
	return (
		<div id="wrapper">
			<Navbar />
			<div className="container">
				<BlogsHeroSection />
				<Catgories />
				<CategoriesScroll />
				<TopBlogs />
				<LatestBlogs />
				<NewsLetter />
			</div>
			<Footer />
		</div>
	);
};

export default Blog;
