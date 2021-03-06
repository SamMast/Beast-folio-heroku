import React from "react";
// import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { StickyContainer, Sticky } from 'react-sticky';

const Resume = () => (
  <StickyContainer style={{clear:"both"}} id="resume">
	    <Sticky className="pageHeader" style={{backgroundColor:"white",opacity:1,zIndex:998}}>
          {
            ({
              style = {
              	position:"fixed",
              	top:"0vh",
              	zIndex:998,
              	backgroundColor:"white",
              	opacity:1
              },
 
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight
            }) => {
              return (
              	<div className="stickyHeader" style={style}>
			    <hr />
			    <h2 className="text-center">About Me</h2>
			    <hr />
			    </div>
              )
            }
          }
	    </Sticky>
	  	<Nav background="white"/>
	  	<br />
	  	<div style={{position:"absolute",minWidth:"100%",backgroundColor:"white",opacity:1,zIndex:993, marginTop:"5vh"}}>
	  		<img className="zoomer" src="https://sammast.github.io/Responsive-Portfolio/assets/images/IMG_3302.jpg" alt="sam" style={{display:"block",margin:"auto",borderRadius:"50%",height:"25vh",width:"25vh",boxShadow:"0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)",zIndex:995}} />
	  	</div>
  	<div className="resumeScroll">
	  	<p className="text-center col-md-6 fadeIn" style={{margin:"auto"}}>Experienced Full- Stack Web Developer with a demonstrated history of working in numerous applications. Recently completed an immersive, full-stack program involving over 300 hours of coursework focusing on full stack web development. Currently searching for full-time employment.</p>
	  	<br />
		<p className="text-center col-md-6 fadeIn" style={{margin:"auto"}}><strong>Primary experience includes:</strong> HTML5, CSS3, JavaScript/jQuery, AJAX, JSON, Node.js, MongoDB, MySQL, Express.js, and React.js.</p>
		<br />
		<p className="text-center col-md-6 fadeIn" style={{margin:"auto"}}>I have a strong respect for the web development process and I am a team player with an understanding of client experience and relationships.</p>
	  	<br />
		<ul className="timeline fadeIn">
	  	<h4 className="text-center" style={{textDecoration:"underline"}}>Resume Timeline:</h4>
	  	<br />
			<em><p style={{fontSize: "75%", textAlign:"center"}}>See Briefcase link to the right for full Resume</p></em>
	  	<br />
		  <li className="timeline-event">
		    <label className="timeline-event-icon"></label>
		    <div className="timeline-event-copy">
		      <p className="timeline-event-thumbnail">2018 - current</p>
		      <h3>Trilogy Education Services</h3>
		      <h4>Web Development Teaching Assistant</h4>
		      <p><strong>Info</strong><br/>Teaching Assistant for a Full MERN Stack Web Development Course</p>
		      <div><strong>Accomplishments</strong><br/>
		      	<ul>
		      		<li>Teaching students on various web development languages and subjects, including JavaScript, React, jQuery, MySQL, MongoDB, etc.</li>
		      		<li>Assist students on homework and projects, as well as Grading all assignments after submission</li>
		      	</ul>
		      </div>
		    </div>
		  </li>
		  <li className="timeline-event">
		    <label className="timeline-event-icon"></label>
		    <div className="timeline-event-copy">
		      <p className="timeline-event-thumbnail">2018 - current</p>
		      <h3>Independent Consultant</h3>
		      <h4>Full Stack Web Developer</h4>
		      <p><strong>Info</strong><br/>Independent Consultant and Freelance Web Developer</p>
		      <div><strong>Accomplishments</strong><br/>
		      	<ul>
		      		<li>Created Projects listed in Portfolio Section (below)</li>
		      		<li>Succesfully completed additional coursework to further my knowledge in Web/Software development.  Examples include "The Complete React Native and Redux Course" and "React - Mastering Test and Behavior Driven Development"</li>
		      	</ul>
		      </div>
		    </div>
		  </li>
		  <li className="timeline-event">
		    <label className="timeline-event-icon"></label>
		    <div className="timeline-event-copy">
		      <p className="timeline-event-thumbnail">2018</p>
		      <h3>University of Denver Full Stack Web Development Program</h3>
		      <h4>Student</h4>
		      <p><strong>Info</strong><br/>Intensive Full Stack Web Development bootcamp where we covered HTML5, CSS3, JavaScript/jQuery, AJAX, JSON, Node.js, MongoDB, MySQL, Express.js, React.js, and PHP.</p>
		      <p>This is where I honed my Web Development craft</p>
		    </div>
		  </li>
		  <li className="timeline-event">
		    <label className="timeline-event-icon"></label>
		    <div className="timeline-event-copy">
		      <p className="timeline-event-thumbnail">2014 - 2017</p>
		      <h3>Businessolver</h3>
		      <h4>System Relationship Manager</h4>
		      <p><strong>Info</strong><br/>A tech company in the Insurance Field which provides system-as-as-service platform to manage human resources.</p>
		      <div><strong>Accomplishments</strong><br/>
		      	<ul>
		      		<li>Responsible for systems management to meet business objectives and track progress to ensure timely and accurate completion of key milestones for daily and long term client tasks</li>
		      		<li>Mitigated risk by attention to detail in creating process documentation for High profile clients</li>
		      		<li>Used data analysis to accurately identify trends to problem solve daily tasks, increasing efficiency </li>
		      		<li>Proficient in analyzing client programming in order to articulate to systems analyst projects goals and needs </li>
		      	</ul>
		      </div>
		    </div>
		  </li>
		  <li className="timeline-event">
		    <label className="timeline-event-icon"></label>
		    <div className="timeline-event-copy">
		      <p className="timeline-event-thumbnail">2013 - 2014</p>
		      <h3>StudySync</h3>
		      <h4>Marketing Research Intern</h4>
		      <div><strong>Accomplishments</strong><br/>
		      	<ul>
		      		<li>Supported Director of Educational Partnership through data collection to advance educational data technology in schools</li>	      
		      		<li>Conducted research and successfully gathered leads on potential partnerships for implementation in domestic and international school districts</li>
		      	</ul>
		      </div>
		    </div>
		  </li>
		  <li className="timeline-event">
		    <label className="timeline-event-icon"></label>
		    <div className="timeline-event-copy">
		      <p className="timeline-event-thumbnail">2007 - 2012</p>
		      <h3>University of Colorado at Boulder</h3>
		      <h4>Student</h4>
		      <div><strong>Accomplishments</strong></div>
		      	<ul>
			      	<li>B.A. Integrative Physiology</li> 
			      	<li>National Society of Leaderhsip and Success</li> 
			      	<li>4-year Golden Buffalo Marching Band member (drumline)</li>
		      	</ul>
		    </div>
		  </li>
		  <li className="timeline-event">
		    <label className="timeline-event-icon"></label>
		    <div className="timeline-event-copy">
		      <p className="timeline-event-thumbnail">2007 - 2013</p>
		      <h3>Air Academy High School Bands</h3>
		      <h4>Lead Percussion Instructor</h4>
		      <div><strong>Accomplishments</strong><br/>
		      	<ul>
		      		<li>Facilitated the achievement of 1st place trophies in the CBA State Marching Band Competition for 6 straight years</li>
		      		<li>Developed and directed weekly practices for high school music students</li>	      
		      		<li>Managed and mentored a team of percussion instructors</li>
		      		<li>Implemented and taught private lessons for further student development</li>
		      	</ul>
		      </div>
		    </div>
		  </li>
		</ul>  
    </div>
  </StickyContainer>
);

export default Resume;
