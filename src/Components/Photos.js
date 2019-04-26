import React from "react";
import ModalImage from 'react-modal-image'


import "../stylesheets/Photos.scss";



const Photos = () => {
  return (

  <div className="photos_container">
      <h1 className="photos_title">PHOTO GALLERY</h1>
      <div className="row"> 
        <div className="column">
          <ModalImage className='image'
            small={"../assets/photos_page/photo2.jpg"}
            large={"../assets/photos_page/photo2.jpg"}
            alt='Food Pantry Services'
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
            small={"../assets/photos_page/photo5.jpg"}
            large={"../assets/photos_page/photo5.jpg"}
            alt="Financial Counseling"
          />
        <ModalImage className='image'
            small={"../assets/photos_page/photo6.jpg"}
            large={"../assets/photos_page/photo6.jpg"}
            alt="ESL Classes"
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
          <ModalImage className='image'
            small={"../assets/photos_page/photo9.jpg"}
            large={"../assets/photos_page/photo9.jpg"}
            alt="Metropolitan Community College Registration"
          />
        </div>
        <div className="column">
          <ModalImage className='image'
            small={"../assets/photos_page/photo10.png"}
            large={"../assets/photos_page/photo10.png"}
            alt="Returning to College Celebration"
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
// import React from "react";
// import "../stylesheets/Photos.scss";


// const Photos = () => {
//   return (
//   <div className="photos_container">
//       <h1 className="photos_title">PHOTO GALLERY</h1>
//       <div className="row"> 
//         <div className="column">
//           <img className='image'src="../assets/photos_page/photo2.jpg" />
//           <img className='image' src="../assets/photos_page/photo3.jpg" />
          
//         </div>
//         <div className="column">
//           <img className='image' src="../assets/photos_page/photo4.jpg" alt='young man in his graduation after completing the program'/>
//           <img className='image' src="../assets/photos_page/photo5.jpg" alt='Employment and financial counseling'/>
//           <img className='image' src="../assets/photos_page/photo6.jpg" alt='English as a Second Language class'/>
//         </div> 
//         <div className="column">
//           <img className='image' src="../assets/photos_page/photo7.jpg" alt='One World Clinic Partership'/>
//           <img className='image' src="../assets/photos_page/photo8.png" alt='young man celebrating his return to college'/>
//           <img className='image' src="../assets/photos_page/photo9.jpg" alt='food pantry service'/>
//         </div>
//         <div className="column">
//           <img className='image' src="../assets/photos_page/photo10.png" alt='thanksgiving lunch'/>
//           <img className='image' src="../assets/photos_page/photo11.jpg" alt='young man registering at Metropolitan Community College'/>
//         </div>
//       </div>
//   </div>
//   );
// };

// export default Photos;
