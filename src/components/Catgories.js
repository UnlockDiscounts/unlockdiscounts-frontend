import categories_data from "../data/categories_data";
import "../styles/Categories.css";

const Catgories = () => {
	return (
		<div>
			<h1 className="categorie_heading">Categories</h1>
			<ul className="list_container">
				{categories_data.map((categorie) => (
					<li
						className={`list_items ${
							categorie.is_Active === "True" ? "active" : "inactive"
						}`}
						key={categorie.id}
					>
						{categorie.categorie_name}
					</li>
				))}
			</ul>
			<div className="button-explore-container">
				<button type="button" className="explore-button">
					Explore More
				</button>
			</div>
		</div>
	);
};
export default Catgories;
