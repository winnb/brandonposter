import React from 'react';
import { Router } from "@reach/router"; // Router

// Pages
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
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
              <About path="/about" />
              <PageNotFound path="/page-not-found" default />
            </Router>
          </div>
        <Footer/>
      </div>
  );
}

export default App;
