import React from "react";
import VolunteerForm from './VolunteerForm';
import "../stylesheets/Volunteer.scss";

const Volunteer = () => {
    return (
      <div className="volunteer-page__container">
        <div className="volunteer__descriptions">
        <h1 className="volunteer__heading--primary">Roles of Volunteers</h1>
        <hr className="hr-line" />
        <h2>Mentors</h2>
        <p>We are looking for highly reliable people to assist as mentors and come in once a week
           or twice a month. Some of our participants have no one to turn to after they have served 
           their time. The friendly hand of a mentor that can guide and inspire them is crucial 
           in their reintegration into society. This is an excellent experience for aspiring social 
           workers, educators, counselors and law students. Fun, challenging and truly inspirational.
        </p>
        <h2>Drivers</h2>
        <p>One of the hardest things for a young person trying to make amends with society is being 
            able to safely and on time to the different activities that their parole officer has 
            determined. Without proper transportation, this can be a challenging task. This is why 
            we are constantly looking for drivers who are willing to volunteer their time to help them
            until they are able to mobilize around town by their own means.
        </p>
        <p>Please fill out the survery below so you can get started volunteering.</p>
        </div>
        <div className="volunteer-form__container">
        <VolunteerForm />
        </div>
      </div>
  );
}
export default Volunteer;