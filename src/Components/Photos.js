import React from "react";
import "../stylesheets/Photos.scss";

const Photos = () => {
  return (
  <div className="photos_container">
      <h1 className="photos_title">PHOTO GALLERY</h1>
      <div class="row"> 
        <div class="column">
          {/* <img src="../assets/photos_page/photo1.jpg"/> */}
          <img src="../assets/photos_page/photo2.jpg"/>
          <img src="../assets/photos_page/photo3.jpg"/>
          
        </div>
        <div class="column">
          <img src="../assets/photos_page/photo4.jpg"/>
          <img src="../assets/photos_page/photo5.jpg"/>
          <img src="../assets/photos_page/photo6.jpg"/>
        </div> 
        <div class="column">
          <img src="../assets/photos_page/photo7.jpg"/>
          <img src="../assets/photos_page/photo8.png"/>
          <img src="../assets/photos_page/photo9.jpg"/>
        </div>
        <div class="column">
          <img src="../assets/photos_page/photo10.png"/>
          <img src="../assets/photos_page/photo11.jpg"/>
          {/* <img src="../assets/photos_page/photo1.jpg"/> */}
        </div>
      </div>
  </div>
  );
};

export default Photos;
