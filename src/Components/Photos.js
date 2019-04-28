import React from "react";
import ModalImage from 'react-modal-image'


import "../stylesheets/Photos.scss";



const Photos = () => {
  return (

  <div className="photos_container">
      <h1 className="photos_title">PHOTO GALLERY</h1>
      <hr className="hr-line" />
      <div className="row"> 
        <div className="column">
          <ModalImage className='image'
            small={"../assets/photos_page/photo2.jpg"}
            large={"../assets/photos_page/photo2.jpg"}
            alt='Food Pantry Services'
          />
          <ModalImage className='image'
            small={"../assets/photos_page/photo5.jpg"}
            large={"../assets/photos_page/photo5.jpg"}
            alt="Financial Counseling"
          />
           
          <ModalImage className='image'
            small={"../assets/photos_page/photo3.jpg"}
            large={"../assets/photos_page/photo3.jpg"}
            alt='Graduation from Metropolitan Community College'
          />

        </div>
        <div className="column">
          <ModalImage className='image'
              small={"../assets/photos_page/photo4.jpg"}
              large={"../assets/photos_page/photo4.jpg"}
              alt="Community Service and Engagement"
            />
          <ModalImage className='image'
            small={"../assets/photos_page/photo10.png"}
            large={"../assets/photos_page/photo10.png"}
            alt="Returning to College Celebration"
          />
          
        
          <ModalImage className='image'
            small={"../assets/photos_page/photo9.jpg"}
            large={"../assets/photos_page/photo9.jpg"}
            alt="Metropolitan Community College Registration"
          />
       
          
        </div> 
        <div className="column">
          <ModalImage className='image'
            small={"../assets/photos_page/photo7.jpg"}
            large={"../assets/photos_page/photo7.jpg"}
            alt="Partnership with One World Clinic"
          />
          <ModalImage className='image'
            small={"../assets/photos_page/photo8.png"}
            large={"../assets/photos_page/photo8.png"}
            alt="Food Pantry Services"
          />
          
        </div>
        <div className="column">
          <ModalImage className='image'
              small={"../assets/photos_page/photo6.jpg"}
              large={"../assets/photos_page/photo6.jpg"}
              alt="ESL Classes"
            />
          <ModalImage className='image'
            small={"../assets/photos_page/photo11.jpg"}
            large={"../assets/photos_page/photo11.jpg"}
            alt="Thanksgiving Dinner"
          />
        </div>
      </div>
  </div>
  );
};

export default Photos;

