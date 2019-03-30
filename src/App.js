import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer.js";

class App extends Component {
  render() {
    return (
      //////////////////////// NavBar /////////////////////////// 
      <ul>
        <li>
          <div className="btn-container">
            <a href="#">Home</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#">About Us</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#">Diamond Stories</a>
            </div>
          </li>

        <li>
          <div className="btn-container">
            <a href="#">Photos</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#">Volunteer</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#">Donate</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#">Contact Us</a>
          </div>
        </li>
</ul>
//////////////////////// End of NavBar ///////////////////////////
        
    );
  }
}

export default App;
