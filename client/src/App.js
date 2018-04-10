import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Technologies from "./pages/Technologies";


//version with 1 footer
const App = () => (
    <div>
	    <Home />
	    <Resume />
		<br />
		<Technologies />
	    <Portfolio />
	    <br />
	    <br />
	    <br />
	    <br />
	    <Contact />

    </div>
);



export default App;
