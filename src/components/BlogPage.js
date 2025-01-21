import { useLocation } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const BlogPage = ()=>{
    const location = useLocation();
    const data = location.state;
    return(
        <div id="wrapper">
            <Navbar/>
            <div>
                <img src={data.image}></img>
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
            </div>
            <Footer/>
        </div>

    )
}
export default BlogPage;