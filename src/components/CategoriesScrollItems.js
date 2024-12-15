import React, { useState } from 'react';
import '../styles/CategoriesScroll.css';

const CategoriesScrollItems = ({ catloglist }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxTextLength = 60; // Adjust based on where "home" is in the description

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    // Function to handle truncation
    const getTruncatedText = (text) => {
        if (text.length <= maxTextLength || isExpanded) {
            return text;
        }
        return text.substring(0, maxTextLength) + '....';
    };

    return (
        <li className="card_container">
            <div className='image-container'>
            <img alt="Nature" src={catloglist.image} className="card_image" />
            <span className="time-badge-image">{catloglist.duration}</span>
            </div>
            <span className="time-badge-imag-desktop">{catloglist.duration}</span>
            <h2 className="card_title">{catloglist.title}</h2>
            <div className='card_description_container'>
            <p className="card_description">
                {getTruncatedText(catloglist.description)}
                {!isExpanded && (
                    <span
                        onClick={toggleReadMore}
                        style={{ color: "brown", cursor: "pointer", fontWeight: "bold",textDecoration:"underline" }}
                    >
                        Read more
                    </span>
                )}
                {isExpanded && (
                    <span
                        onClick={toggleReadMore}
                        style={{ color: "brown", cursor: "pointer", fontWeight: "bold" }}
                    >
                        Show less
                    </span>
                )}
            </p>
            <p className="card_description-desktop">{catloglist.description}</p>
            </div>
            <div className="author_container">
                <img
                    className="author_image"
                    alt="profile"
                    src={catloglist.writter.wirtter_image}
                />
                <div className='writter_container'>
                    <p className="written_by">Written by</p>
                    <p className="author_name">{catloglist.writter.wiritter_name}</p>
                </div>
            </div>
        </li>
    );
};

export default CategoriesScrollItems;
