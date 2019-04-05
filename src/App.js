import React, { Component } from "react";
import "./stylesheets/App.scss";
import LandingPage from "./Components/LandingPage.js"
import Footer from "./Components/Footer.js";
import NavBar from "./Components/NavBar.js";
import Stories from "./Components/Stories.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <LandingPage />
        <Stories />
        <Footer />
      </div>
    );
  }
}

export default App;
