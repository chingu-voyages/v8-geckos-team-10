import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./stylesheets/App.scss";
import { library } from '@fortawesome/fontawesome-svg-core'

import { faGem } from '@fortawesome/free-solid-svg-icons'

import NavBar from "./Components/NavBar.js";
import LandingPage from "./Components/LandingPage.js";
import Footer from "./Components/Footer.js";
// Import page components
import About from "./Components/About.js";
import Stories from "./Components/Stories.js";
import Donate from "./Components/Donate.js";
import Contact from "./Components/Contact.js";
import Photos from "./Components/Photos.js";
import Volunteer from "./Components/Volunteer.js";

// Add Icon for Collapsible Menu
library.add(faGem)

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/stories" render={() => <Stories />} />
        <Route exact path="/donate" render={() => <Donate />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/photos" render={() => <Photos />} />
        <Route exact path="/volunteer" render={() => <Volunteer />} />
        <Footer />
      </div>
    );
  }
}

export default App;
