import "../styles/TopBlogs.css";
import { Link } from "react-router-dom";

const LatestBlogsItems = ({ blogsData }) => {
  return (
    <li className="top_blog_container">
      <div className="image-container">
        <img className="top_blog_image" alt="blogImage" src={blogsData.images[0]} />
        <span className="time-badge">{blogsData.time}</span>
      </div>
      <h2 className="top_blog_title">{blogsData.title}</h2>
      <p className="top_blog_description">{blogsData.description}</p>
      <div className="visibility-container">
        <div className="top_blogsNote_container">
          <div className="author_container">
            <img
              className="author_image"
              alt="profile"
              src={blogsData.writer.writer_image}
            />
            <div className="writter_container">
              <p className="written_by">Written by</p>
              <p className="author_name">{blogsData.writer.writer_name}</p>
            </div>
          </div>
          <p className="top_blogsNote">{blogsData.time} read</p>
        </div>
      </div>
      <Link to={`/blog/${blogsData.BlogId}`} className="read-more">
        Read More →
      </Link>
    </li>
  );
};

export default LatestBlogsItems;
