import "../styles/TopBlogs.css";
import { Link } from "react-router-dom";

const LatestBlogsItems = ({ blogsData }) => {
  return (
    <li className="top_blog_container">
      <div className="image-container">
        <img className="top_blog_image" alt="blogImage" src={blogsData.image} />
        <span className="time-badge">{blogsData.heading}</span>
      </div>
      <h2 className="top_blog_title">{blogsData.title}</h2>
      <p className="top_blog_description">{blogsData.description.substring(0, 150)}...</p>
      <div className="visibility-container">
        <div className="top_blogsNote_container">
          <p className="top_blogsNote">Read More</p>
        </div>
      </div>
      <Link to={`/blog/${blogsData._id}`} className="read-more">
        Read More →
      </Link>
    </li>
  );
};

export default LatestBlogsItems;
