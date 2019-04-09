import React from "react";
import { ReactTypeformEmbed } from 'react-typeform-embed';
import "../stylesheets/Volunteer.scss";

const Volunteer = () => {
    return (
      <div className="volunteer__form">
        <ReactTypeformEmbed popup={false} url="https://jeremyhuppe.typeform.com/to/KokmCR" />
      </div>
  );
}
export default Volunteer;
