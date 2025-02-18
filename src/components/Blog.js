import "../App.css";
import CategoriesScroll from "./CategoriesScroll";
import Catgories from "./Categories";
import NewsLetter from "./NewsLetter";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBlogs from "./TopBlogs";
import LatestBlogs from "./LatestBlogs";
import BlogsHeroSection from "./BlogsHeroSection";

const Landing = () => {
	return (
		<div id="wrapper">
			<Navbar />
			<div className="container">
				<BlogsHeroSection />
				<Catgories />
				<CategoriesScroll/>
				<TopBlogs/>
				<LatestBlogs/>
				<NewsLetter />
			</div>
			<Footer />
		</div>
	);
};

export default Landing;
