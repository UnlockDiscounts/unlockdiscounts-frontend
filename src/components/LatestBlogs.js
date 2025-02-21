import LatestBlogsData from "../data/LatestBlogsData";
import LatestBlogsItems from "./LatestBlogsItems";
const LatestBlogs = () => {
  return (
    <>
      <h1 className="top_blog_heading-desktop">Latest-Blogs</h1>
      <ul className="top_blog_wrapper">
        <div className="top_blog_tag_container">
          <h1 className="top_blog_heading">Latest Blogs</h1>
          <p className="top_blog_des">
            Lorem ipsum dolor sit amet consectetur. Porta ut aenean ultrices
            lacus vulputate mauris varius sed elementum. Cursus massa nibh ac
            neque sit felis. Laoreet facilisis
          </p>
        </div>
        {LatestBlogsData.map((BlogItem) => (
          <LatestBlogsItems key={BlogItem.id} blogsData={BlogItem} />
        ))}
      </ul>
    </>
  );
};
export default LatestBlogs;
