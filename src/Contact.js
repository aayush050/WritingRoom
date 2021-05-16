import React from "react";
import "./contact.css";
import "font-awesome/css/font-awesome.min.css";
import { ExternalLink } from "react-external-link";
import { Nav, Navbar, Container } from "react-bootstrap";

const Contact = () => {
  const insta = "https://www.instagram.com/gift_a_laugh";
//  const github = "https://github.com/aayush050";
  const facebook = "https://www.facebook.com/gift.a.laugh/";
  const linkedin = "https://www.linkedin.com/in/aayush-singla-322426120/";
  const mail = "mailto:aayushsingla087@gmail.com";
  return (
    <Navbar bg="dark" sticky="bottom" className="container-fluid">
      <Navbar.Brand >

            <Container className="social">
              <ExternalLink href={facebook}>
                <i className="fa fa-facebook mx-2"></i>
              </ExternalLink>
              <ExternalLink href={linkedin}>
                <i className="fa fa-linkedin-square mx-2"></i>
              </ExternalLink>
              <ExternalLink href={insta}>
                <i className="fa fa-instagram mx-2"></i>
              </ExternalLink>
              <ExternalLink href={mail}>
                <i className="fa fa-envelope mx-2"></i>
              </ExternalLink>
            </Container>
            <Container>
              <pre className="text">&#174;WR All Rights Reserved</pre>
            </Container>
            </Navbar.Brand>
            <Nav.Link className="ml-auto active" >
              <Container className = " mx-1">
              <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEd8dEPOIW-RA/profile-displayphoto-shrink_200_200/0/1612726419159?e=1625702400&v=beta&t=VVTZplGBH-V_EcRWcIQypZ7NQ6VBxaYHx0bepwhhzn8"
                alt="myImage"/>
                
              <p className="text">
            
                <strong className="text">Aayush Singla</strong>
                <br />
                Web Developer
              </p>
              </Container>
         </Nav.Link >
    </Navbar>
  );
};

export default Contact;
