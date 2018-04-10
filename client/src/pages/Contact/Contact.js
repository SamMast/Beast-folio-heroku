import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import API from "../../utils/API";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.name !== "" && this.state.email !== "" && this.state.message !=="") {
      //Add send email code here
      API.sendMail({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
        .then(res =>{
          console.log(res.data)
          if(res.data){
            alert("Thank you for contacting Sam 👍\nYour message has been sent, and he will be in touch with you shortly.")

          }
      })
        .catch(err => console.log(err));

      this.setState({ name: "", email: "", message: "" })
    } else {
      alert("Please ensure all fields are completed before submitting form")
    }
  
  };

  log = () => {
    console.log('working');
  }

  render() {
    return (
      <div id="contact">
        <div className="pageHeader" style={{width:"100%",backgroundColor:"white",opacity:1,zIndex:998}}>
          <hr />
          <h2 className="text-center" >Contact Form</h2>
          <hr />
        </div>
        <Nav background="white"/>
        <br />
        <br />
        <br />
        <div className="cont">
          <form className="col-md-6 contactForm fadeIn" style={{display:"block", margin:"auto"}}>
            <br />
            <p className="text-center" style={{fontSize:"200%"}}><strong>Thank you for visiting Sam's Portfolio page!</strong></p>
            <br/>
            <p className="text-center">Please feel free to click the links to the right to access Sam's GitHub page, LinkedIn page, and send a direct email.  If you would like to contact Sam directly, please enter your information into the form below and send.  Sam will receive your message, and be in touch with you ASAP!</p>
            
            <br />
            
            <div className="form-row">
              <div className="col-md-6">

                  <div className="md-form form-group">
                    <i className="fa fa-user prefix"></i>
                    <input 
                      required 
                      type="text" 
                      id="name" 
                      className="form-control"
                      value={this.state.name}
                      name="name"
                      onChange={this.handleInputChange}
                      />
                    <label htmlFor="name" className="active">Name</label>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="md-form form-group">   
                    <i className="fa fa-envelope prefix"></i>
                    <input 
                      required 
                      type="email"
                      id="email" 
                      className="form-control"
                      value={this.state.email}
                      name="email"
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="email" className="active">E-mail address</label>
                  </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-12">
                  <div className="md-form form-group">
                      <i className="fa fa-pencil prefix"></i>
                      <textarea
                        required 
                        type="text" 
                        id="message" 
                        className="form-control md-textarea" 
                        rows="3"
                        value={this.state.message}
                        name="message"
                        onChange={this.handleInputChange}

                        ></textarea>
                      <label htmlFor="message" className="active">Message</label>
                  </div>
              </div>
            </div>
            <br />
            <button 
              type="submit" 
              className="btn btn-default btn-lg" 
              style={{display:"block", margin:"auto"}}
              onClick={this.handleFormSubmit}
              >Submit Form</button>
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
