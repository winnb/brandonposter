import React from 'react';
import { Router } from "@reach/router"; // Router

// Pages
import Home from "./pages/home";
import About from "./pages/about";
import PageNotFound from "./pages/pagenotfound";

// Components
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
          <div>
            <Navbar />
            <Router>
              <Home path="/" />
              <About path="/About" />
              <PageNotFound path="/page-not-found" default />
            </Router>
          </div>
        {/* <Footer/> */}
      </div>
  );
}

export default App;
