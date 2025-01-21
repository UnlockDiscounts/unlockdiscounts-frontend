import Navbar from "./Navbar"
import Footer from "./Footer"
import blog_data from "../data/blog_data";
import categories from "../data/Categories";
import "../styles/BlogCart.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate , Link} from "react-router-dom";
import { useEffect, useState } from "react";

const Blog = ()=>{
    const Arr = [];
    const [categoryArr,setCategoryArr] = useState([]);
    const [selectedGenre,setSelectedGenre] = useState(false);
    const navigate = useNavigate();
    const firstSentence = (text)=>{
        const firstfullStopIndex = text.indexOf('.'); 
        if (firstfullStopIndex === -1) {
          return text; 
        }
        return text.slice(0, firstfullStopIndex + 1); 
    }
  const sentence = firstSentence(blog_data[0].desc);
//   function handleExplore(){
//     navigate('/explore');
//   }
  function handleReadMore(title){
      for(let i = 0;i < blog_data.length;i++){
          if(blog_data[i].title === title){
              const data = blog_data[i];
              const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
              navigate(`/blog/${formattedTitle}`,{state:data});
              console.log(data)
              break;
              
            }
        }
  }
  function handleCategories(category){
      for(let i = 0;i < blog_data.length;i++){
          if(blog_data[i].genre === category){
            Arr.push(blog_data[i]);
            setSelectedGenre(true);
        }
    }
    setCategoryArr(Arr);
}
    return(
        <div id="wrapper">
            <Navbar/>
            <div className="main-content">
                <div className="blog-post product-card">
                    <img className="blog-post__image product-card__image" src={blog_data[0].image} alt="blog image"></img>
                    <h1 className="blog-post__title">{blog_data[0].title}</h1>
                    <p className="blog-post__description product-card__description">{sentence}</p>
                    <button onClick={()=>handleReadMore(blog_data[0].title)}>Read More</button>
                </div>

                <div>
                    <div>
                        {categories.map((category,index)=>{
                            return <button key={index} onClick={()=>handleCategories(category)}>{category}</button>
                        })}
                    </div>
                </div>
                {/* <div><button onClick={handleExplore()}>Explore More</button></div> */}

                {!selectedGenre?(blog_data.map((item)=>{
                    return <div className="blog-post product-card">
                            <img className="blog-post__image" src={item.image}></img>
                            <div className="cart-details">
                                <h3 className="blog-post__title">{item.title}</h3>
                                <p className="blog-post__description">{firstSentence(item.desc)}</p>
                                <Link to="#" onClick={(e)=>{e.preventDefault();
                                    handleReadMore(item.title)}}>Read More</Link>
                            </div>
                        </div>}))
                    :(categoryArr.map((item)=>{
                        return <div className="blog-post product-card">
                            <img className="blog-post__image" src={item.image}></img>
                            <div className="cart-details">
                                <h3 className="blog-post__title">{item.title}</h3>
                                <p className="blog-post__description">{firstSentence(item.desc)}</p>
                                <Link to="#" onClick={(e)=>{e.preventDefault();
                                    handleReadMore(item.title)}}>Read More</Link>
                            </div>
                        </div>
                    }))}
                </div>
            <Footer/>
        
        </div>

    )
}

export default Blog;