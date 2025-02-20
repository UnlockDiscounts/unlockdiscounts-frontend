import TopBlogsData from "../data/TopBlogs";
import TopBlogsItems from "./TopBlogsItems";
const TopBlogs = () => {
  return (
    <>
      <h1 className="top_blog_heading-desktop">Top Blogs</h1>
      <ul className="top_blog_wrapper">
        <div className="top_blog_tag_container">
          <h1 className="top_blog_heading">Top Blogs</h1>
          <p className="top_blog_des">
            Lorem ipsum dolor sit amet consectetur. Porta ut aenean ultrices
            lacus vulputate mauris varius sed elementum. Cursus massa nibh ac
            neque sit felis. Laoreet facilisis
          </p>
        </div>

        {TopBlogsData.map((BlogItem) => (
          <TopBlogsItems key={BlogItem.id} blogsData={BlogItem} />
        ))}
      </ul>
    </>
  );
};
export default TopBlogs;
