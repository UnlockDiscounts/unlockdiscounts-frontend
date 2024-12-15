import "../styles/TopBlogs.css"

const TopBlogsItems = ({blogsData}) =>{
    console.log(blogsData.id)
    return(
        <li className="top_blog_container">
        <div className="image-container">
          <img className="top_blog_image" alt="blogImage" src={blogsData.image} />
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
                src={blogsData.writter.wirtter_image}
              />
              <div className="writter_container">
                <p className="written_by">Written by</p>
                <p className="author_name">{blogsData.writter.wiritter_name}</p>
              </div>
            </div>
            <p className="top_blogsNote">{blogsData.time} reads</p>
          </div>
        </div>
      </li>
      
    )
}
export default TopBlogsItems