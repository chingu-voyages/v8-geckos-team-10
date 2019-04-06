import React, { Component } from "react";
import "./stylesheets/App.scss";
import LandingPage from "./Components/LandingPage.js";
import Footer from "./Components/Footer.js";
import NavBar from "./Components/NavBar.js";

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
