import React, { Component } from "react";
import "../stylesheets/Contact.scss";
import * as emailjs from "emailjs-com";

const emailJsUserId = `${process.env.REACT_APP_EMAILJS_USERID}`;
const template = `${process.env.REACT_APP_EMAILJS_TEMPLATEID}`;
const receiverEmail = `${process.env.REACT_APP_EMAILJS_RECEIVER}`;

class Contact extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreement: false,
    formSubmitted: false,
    formEmailSent: false,
    buttonText: "Send"
  };

  formSubmit = e => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    this.sendFeedback(
      template,
      this.state.email,
      receiverEmail,
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.phone,
      this.state.message,
      this.state.agreement
    );

    this.setState({
      formSubmitted: true
    });
  };

  sendFeedback(
    templateId,
    senderEmail,
    receiverEmail,
    firstName,
    lastName,
    email,
    phone,
    message,
    agreement
  ) {
    emailjs
      .send(
        "mailgun",
        templateId,
        {
          senderEmail,
          receiverEmail,
          firstName,
          lastName,
          email,
          phone,
          message,
          agreement
        },
        emailJsUserId
      )
      .then(res => {
        this.setState({ formEmailSent: true });
        this.resetForm();
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  }
  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      agreement: "",
      buttonText: "Sent"
    });
  };

  render() {
    return (
      <div className="contact-page__container">
        <h1 className="contact__heading--primary">Contact Us</h1>
        <hr className="hr-line" />
        {/* Left side */}
        <div className="contact-page__body">
          <div className="contact-form__container">
            <form onSubmit={e => this.formSubmit(e)}>
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
                  onChange={e => this.setState({ firstName: e.target.value })}
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
                  onChange={e => this.setState({ lastName: e.target.value })}
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
                  onChange={e => this.setState({ email: e.target.value })}
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
                  onChange={e => this.setState({ phone: e.target.value })}
                />
              </div>
              <div className="contact-form__input-box--text-long">
                <label htmlFor="message" className="contact-form__label">
                  <span className="contact-form__mandatory-field" />
                  Message
                </label>
                <textarea
                  className="contact-form__textarea"
                  aria-required="true"
                  id="message"
                  type="text"
                  name="message"
                  required
                  onChange={e => this.setState({ message: e.target.value })}
                />
              </div>
              <div className="contact-form__input-box--checkbox">
                <input
                  className="contact-form__checkbox"
                  id="agreement"
                  type="checkbox"
                  name="agreement"
                  onChange={e =>
                    this.setState({ agreement: !this.state.agreement })
                  }
                />
                <span className="contact-form__checkmark" />
                <label htmlFor="agreement">
                  I agree to receiving marketing and promotional materials
                </label>
              </div>
              <div>
                <input
                  className="btn--contact"
                  type="submit"
                  value={this.state.buttonText}
                  disabled={this.state.formEmailSent}
                />
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
                role="application"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
