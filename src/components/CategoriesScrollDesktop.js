import React, { useState } from 'react';
import '../styles/CategoriesScrollDesktop.css';

const CategoriesScrollDesktop = ({ catloglist }) => {
    return (
        <li className="card_container-desktop">
            <div className='image-container-desktop'>
            <img alt="Nature" src={catloglist.image} className="card_image-desktop" />
            <span className="time-badge-image">{catloglist.duration}</span>
            </div>
            <span className="time-badge-imag-desktop">{catloglist.duration}</span>
            <h2 className="card_title">{catloglist.title}</h2>
            <div className='card_description_container'>
            <p className="card_description-desktop">{catloglist.description}</p>
            </div>
            <div className="author_container-desktop">
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

export default CategoriesScrollDesktop;
