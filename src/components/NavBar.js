import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Siddiha Rimzan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link> {/* Changed from #Skill to #skills */}
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="mailto:Fathimasiddika62@gmail.com">
                <EmailRoundedIcon style={{ fontSize: 20 }} />
              </Nav.Link>
              <Nav.Link href="https://github.com/Siddiha" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ fontSize: 19 }} />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/siddiha-rimzan" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ fontSize: 21 }} />
              </Nav.Link>
              <Nav.Link href="https://medium.com/@fathimasiddika62" target="_blank" rel="noopener noreferrer">
                <BorderColorIcon style={{ fontSize: 20 }} />
              </Nav.Link>
              <Nav.Link href="https://twitter.com/Siddiha_" target="_blank" rel="noopener noreferrer">
                <TwitterIcon style={{ fontSize: 20 }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;

