import React, { Component } from "react";
import "./stylesheets/App.scss";
import LandingPage from "./Components/LandingPage.js"
import Footer from "./Components/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
