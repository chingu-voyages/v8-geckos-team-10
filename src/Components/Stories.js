import React from "react";
import "../stylesheets/Stories.scss";

const Stories = () => {
  return (
    <div className="stories_container">
      <h1 className="stories_title">MEET OUR DIAMONDS</h1>

      <div className="testimonials_container">
        <figure className="snip1386">
          <img
            src="https://images.unsplash.com/photo-1546524279-471adc001f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="sample18"
            className="background"
          />
          <figcaption>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
              sagittis nulla. Donec ultrices, felis nec facilisis lobortis,
              mauris magna volutpat ligula, vitae mollis sapien lectus eu ipsum.
              In porttitor.
            </blockquote>
            <h5>- Emily Barrow</h5>
          </figcaption>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg"
            alt="profile-sample1"
            className="profile"
          />
        </figure>

        <figure className="snip1386">
          <img
            src="https://images.unsplash.com/photo-1540322112357-ebf4f8bfa63c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="sample10"
            className="background"
          />
          <figcaption>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              dignissim est vel feugiat tristique. Nulla dignissim in metus eget
              efficitur. Nulla laoreet volutpat orci, ac pretium libero interdum
              vel. Aenean fringilla felis at leo feugiat luctus. Quisque eu
              tellus cursus, ultrices felis quis, rhoncus sem. Pellentesque in
              ex vitae ex.
            </blockquote>
            <h5>- Tim Forever</h5>
          </figcaption>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
            alt="profile-sample5"
            className="profile"
          />
        </figure>

        <figure className="snip1386">
          <img
            src="https://images.unsplash.com/photo-1521133573892-e44906baee46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="sample19"
            className="background"
          />
          <figcaption>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              dignissim est vel feugiat tristique. Nulla dignissim in metus eget
              efficitur. Nulla laoreet volutpat orci, ac pretium libero interdum
              vel. Aenean fringilla felis at leo feugiat luctus. Quisque eu
              tellus cursus, ultrices felis quis, rhoncus sem. Pellentesque in
              ex vitae ex.
            </blockquote>
            <h5>- Jenny Jenkins</h5>
          </figcaption>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
            alt="profile-sample6"
            className="profile"
          />
        </figure>
      </div>
    </div>
  );
};

export default Stories;
