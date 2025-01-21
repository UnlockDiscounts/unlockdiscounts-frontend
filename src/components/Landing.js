import "../App.css";
import Hero from "./Hero";
import CompanyBar from "./CompanyBar";
import PopularPicks from "./PopularPicks";
import Advertisement from "./Advertisement";
import RecentlyVisited from "./RecentlyVisited";
import NewsLetter from "./NewsLetter";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "./Slider";

const Landing = () => {
	return (
		<div id="wrapper">
			<Navbar />
			<div className="container">
				<Hero />
				{/* <CompanyBar /> */}
				<Slider/>
				<PopularPicks />
				<Advertisement />
				<RecentlyVisited />
				<NewsLetter />
			</div>
			<Footer />
		</div>
	);
};

export default Landing;
