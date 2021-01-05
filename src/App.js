import React from 'react';
import { Router } from "@reach/router"; // Router

// Pages
import Home from "./pages/home";
import Projects from "./pages/projects";
import Pooch from "./pages/pooch";
import Restaurateur from "./pages/restaurateur";
import Divide from "./pages/divide+conquer";
import Confidence from "./pages/confidence+limits";
import Alexandria from "./pages/alexandria";
import Maternal from "./pages/maternal";
import PageNotFound from "./pages/pagenotfound";

// Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
          <div>
            <Navbar />
            <Router>
              <Home path="/" />
              <Projects path="/projects" />
              <Pooch path="/pooch" />
              <Restaurateur path="/Restaurateur" />
              <Divide path="/divide+conquer" />
              <Confidence path="/confidence+limits" />
              <Alexandria path="/alexandria" />
              <Maternal path="/maternal" />
              <PageNotFound path="/page-not-found" default />
            </Router>
          </div>
        <Footer/>
      </div>
  );
}

export default App;
