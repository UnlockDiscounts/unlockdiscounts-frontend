import Footer from "./Footer"
import Navbar from "./Navbar"
import "../styles/Technology.css";
import technology_data from "../data/technology_data";
import { useEffect, useState } from "react";
const Technology = () => {
    const obj = {};
    const [nested, setNested] = useState({});
    const arr = [];
    const setGenre = new Set();
    function Title() {
        for (let i = 0; i < technology_data.length; i++) {
            setGenre.add(technology_data[i].genre);
        }
        setGenre.forEach(value => arr.push(value));

    }
    useEffect(() => {
        for (let j = 0; j < arr.length; j++) { // Filling keys in objects
            obj[arr[j]] = [];
        }
        // console.log(Object.values(obj).values.length,"dataaa")
        technology_data.forEach(data => {    // Filling values in keys with same genre 
            const key = data.genre;
            if (obj[key]) {
                obj[key].push(data)
            }
            else {
                console.log(`"${key} is not exists"`)
            }
        })
        setNested(obj);
    }, [])

    Title();
    const firstSentence = (text) => {
        const firstfullStopIndex = text.indexOf('.');
        if (firstfullStopIndex === -1) {
            return text;
        }
        return text.slice(0, firstfullStopIndex + 1);
    }
    const sentence = firstSentence(technology_data[0].desc);
    return (
        <div id="wrapper">
            <Navbar />
            {/* <div className="main-container"> */}

            {Object.keys(nested).map((key) => {
                return <div className="cart-category"><h2 className="category-heading">{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                    <div class="cart-container">
                        {nested[key].map((item, index) => <div class="cart">
        
                            <div className="cart-image-container">
                                <img src={item.image} alt={item.title} className="cart-image" />
                                <span className="cart-duration">{item.duration}</span>
                            </div>
                            <div className="cart-content">
                                <h3 className="cart-title">{item.title}</h3>
                                <p className="cart-description">{sentence}
                                    <a href={item.link} className="read-more">Read more</a>
                                </p>
                                <div className="cart-footer">
                                    <img
                                        src={item.authorImage}
                                        alt={item.author}
                                        className="author-image" />
                                    <span className="author-name">Written by {item.author}</span>
                                </div>
                            </div>
                        </div>)}</div>
                </div>
            })}
            {/* </div> */}

            <Footer />
        </div>
    )
}
export default Technology;