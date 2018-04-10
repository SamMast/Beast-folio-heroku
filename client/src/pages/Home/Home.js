import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Nav from "../components/Nav";

class Home extends Component {

  render() {
    return (
		<div className="homepage">
			<Nav background="transparent"/>

			<div className="intro slideLeft">
				<h1 className="header">
					Samuel Mast
				</h1>
				<div className="underscore">
					<h4>Web Developer</h4>
					<h4>Denver, Colorado</h4>
				</div>
			</div>



		</div>
    );
  }
}



export default Home;
