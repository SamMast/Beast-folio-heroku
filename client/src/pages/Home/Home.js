import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Nav from "../components/Nav";

class Home extends Component {

  render() {
    return (
		<div className="homepage" id="homepage">
			<Nav background="transparent"/>

			<div className="intro slideLeft">
				<h1 className="header">
					Samuel Alton Mast
				</h1>
				<div className="underscore">
					<h4>Developer</h4>
					<h6>Denver, Colorado</h6>
				</div>
			</div>



		</div>
    );
  }
}



export default Home;
