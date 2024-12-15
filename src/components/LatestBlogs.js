import LatestBlogsData from "../data/LatestBlogsData"
import LatestBlogsItems from "./LatestBlogsItems"
const LatestBlogs = () =>{

    return(
        <>
         <h1 className="top_blog_heading">Latest Blogs</h1>
            <ul className="latest_blog_wrapper">
               
                {
                    LatestBlogsData.map((BlogItem)=>(
                       
                        <LatestBlogsItems key={BlogItem.id} blogsData={BlogItem}/>
                    ))
                }
            </ul>
        
        </>
    )
}
export default LatestBlogs