import React from "react";
import "../stylesheets/Contact.scss";

const Contact = () => {
  return (
    <div className="contact-page__container">
      <h1 className="contact__heading--primary">Contact Us</h1>
      {/* Left side */}
      <div className="contact-page__body">
        <div className="contact-form__container">
          <form>
            <p>
              <span className="contact-form__mandatory-field" />
              Indicates required field
            </p>
            <div className="contact-form__input-box--text-short">
              <label htmlFor="firstName" className="contact-form__label">
                <span className="contact-form__mandatory-field" />
                First Name
              </label>
              <input
                className="contact-form__input-field"
                aria-required="true"
                id="firstName"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="contact-form__input-box--text-short">
              <label htmlFor="lastName" className="contact-form__label">
                <span className="contact-form__mandatory-field" />
                Last Name
              </label>
              <input
                className="contact-form__input-field"
                aria-required="true"
                id="lastName"
                type="text"
                name="lastName"
                required
              />
            </div>
            <div className="contact-form__input-box--text-short">
              <label htmlFor="emailAddress" className="contact-form__label">
                <span className="contact-form__mandatory-field" />
                Email
              </label>
              <input
                className="contact-form__input-field"
                aria-required="true"
                id="emailAddress"
                type="email"
                name="emailAddress"
                required
              />
            </div>
            <div className="contact-form__input-box--text-short">
              <label htmlFor="phoneNumber" className="contact-form__label">
                <span className="contact-form__mandatory-field" />
                Phone
              </label>
              <input
                className="contact-form__input-field"
                aria-required="true"
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                required
              />
            </div>
            <div className="contact-form__input-box--text-long">
              <label htmlFor="comment" className="contact-form__label">
                <span className="contact-form__mandatory-field" />
                Comment
              </label>
              <textarea
                className="contact-form__textarea"
                aria-required="true"
                id="comment"
                type="text"
                name="comment"
                required
              />
            </div>
            <div className="contact-form__input-box--checkbox">
              <input
                className="contact-form__checkbox"
                id="agreement"
                type="checkbox"
                name="agreement"
                required
              />
              <span className="contact-form__checkmark" />
              <label for="agreement">
                I agree to receiving marketing and promotional materials
              </label>
            </div>
            <div>
              <input className="btn--contact" type="submit" value="Submit" />
            </div>
          </form>
        </div>
        {/* Right side */}
        <div className="contact-info__container">
          <div className="contact-info__email-phone">
            <p>
              <span className="contact-info__link-title">Email: </span>
              <a
                className="contact-info__link"
                href="mailto:latincbc@gmail.com"
              >
                latincbc@gmail.com
              </a>
            </p>
            <p>
              <span className="contact-info__link-title">Phone 1: </span>
              <a className="contact-info__link" href="tel: 4028137153">
                402-813-7153
              </a>
            </p>
            <p>
              <span className="contact-info__link-title">Phone 2: </span>
              <a className="contact-info__link" href="tel: 4025469978">
                402-546-9978
              </a>
            </p>
          </div>
          <div className="contact-info__address">
            <p className="contact-info__p">
              <a
                href="http://maps.google.com/?q=4825 S. 25th St. Suite # 100 Omaha, NE 68107"
                target="_blank"
                rel="noopener noreferrer"
              >
                4825 S. 25th St. Suite # 100 Omaha, NE 68107
              </a>
            </p>
          </div>
          <div className="google-maps__container">
            <iframe
              allowtransparency="true"
              frameBorder="0"
              scrolling="no"
              style={{
                display: "inline-block",
                width: "100%",
                height: "350px",
                marginTop: "10px",
                marginBottom: "10px"
              }}
              src="//www.weebly.com/weebly/apps/generateMap.php?map=google&amp;elementid=123812155766003128&amp;ineditor=0&amp;control=3&amp;width=auto&amp;height=350px&amp;overviewmap=0&amp;scalecontrol=0&amp;typecontrol=0&amp;zoom=15&amp;long=-95.94822729999999&amp;lat=41.2102195&amp;domain=www&amp;point=1&amp;align=1&amp;reseller=true"
              title="gmaps"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
