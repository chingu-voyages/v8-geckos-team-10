import React from "react";
import "../stylesheets/Photos.scss";

const Photos = () => {
  return (
    <div className="photos_container">
      <h1 className="photos_title">PHOTO GALLERY</h1>
      <div className="slide-container">
        <span id="slider-image-1" />
        <span id="slider-image-2" />
        <span id="slider-image-3" />

        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1463946377180-f5185c2783e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
            className="slider-image"
            alt="1"
          />
          <img
            src="https://images.unsplash.com/photo-1463946377180-f5185c2783e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
            className="slider-image"
            alt="2"
          />
          <img
            src="https://images.unsplash.com/photo-1463946377180-f5185c2783e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
            className="slider-image"
            alt="3"
          />
        </div>
        <div className="button-container">
          <a href="#slider-image-1" className="slider-button" alt="image 1">
            {" "}
          </a>
          <a href="#slider-image-2" className="slider-button" alt="image 2">
            {" "}
          </a>
          <a href="#slider-image-3" className="slider-button" alt="image 3">
            {" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Photos;
