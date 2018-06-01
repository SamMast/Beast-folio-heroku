import React, { Component } from "react";
import scrollToElement from 'scroll-to-element';

class Nav extends Component {
  state = {
    menuOpen: false
  };

  menuToggle = () => {
    console.log(this.props.background);

    console.log("running");
    if (!this.state.menuOpen) {
      this.setState({ menuOpen: true })
    } else {
      this.setState({ menuOpen: false })
    }
  };

  style = {
    width: "100%",
    backgroundColor: "transparent",
    opacity: 1,
    zIndex:997
  }

  scroll = (event) => {
  let element = event.target.name;
  
  scrollToElement("#" + element);
  }

  render() {
    return (
      <div>
        <div className="samLogo">
          <a href="/" >
            <img src="https://raw.githubusercontent.com/SamMast/Beast-folio-heroku/master/client/public/images/sam-03.png" alt="logo" className="logoImage" style={styles.logoStyle}/>
          </a>
        </div>

        <div className="menu pulse" onClick ={this.menuToggle}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>

        {this.state.menuOpen ? (
          <div className="nav" style={this.style}>
            <ul>
              <li><a name="resume" onClick= {this.scroll}>About</a></li>
              <li><a name="techDiv" onClick= {this.scroll}>Technologies</a></li>
              <li><a name="portfolio" onClick= {this.scroll}>Portfolio</a></li>
              <li><a name="contact" onClick= {this.scroll}>Contact</a></li>
            </ul>
          </div>
          ) : (
          <div className="nav" style={this.style}>
            <ul>
              <li style={{opacity:0}}><a href="">Home</a></li>
              <li style={{opacity:0}}><a href="">About</a></li>
              <li style={{opacity:0}}><a href="">Technologies</a></li>
              <li style={{opacity:0}}><a href="">Portfolio</a></li>
              <li style={{opacity:0}}><a href="">Contact</a></li>
            </ul>
          </div>)
        }

        <div className="contact-links pulse">
          <a href="https://www.linkedin.com/in/sammast/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
          <br/>
          <a href="https://github.com/SamMast/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          <br/>
          <a href="mailto:samuel.a.mast@gmail.com"><i className="fa fa-envelope"></i></a>
          <br/>
          <a href="https://docs.google.com/document/d/1SvNGx-Zov0sGCItMEhysUmMGGzsb58NdOw43EJhl0tY/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-suitcase"></i></a>
        </div>

        <div className="arrow pulse">
          <a href="#resume"><i className="fa fa-arrow-down"></i></a>
        </div>

      </div>
    );
  }
}

const styles = {
  logoStyle: {
    position: "fixed",
    top: 5,
    left: "2vh",
    height: 100,
    width: 100,
    backgroundColor: "white",
    zIndex: 9999,
    boxShadow: "0 2px 5px 0 rgba(0,0,0,.16)"
  }
}

export default Nav;
