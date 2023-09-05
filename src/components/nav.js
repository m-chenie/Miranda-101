import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import linkedIN from '../assets/img/linkedin.svg';
import githubLogo from '../assets/img/github.svg';
import { useState, useEffect } from "react"
// import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom';



const NavBar = () => {
    const [activePage, setActivePage] = useState("Home"); 

      // checks if we scroll down to project section, if so the active page is set to projects
    // const handleScroll = () => {
    //   const projectsSection = document.getElementById('projects');
    //   if (projectsSection) {
    //     const rect = projectsSection.getBoundingClientRect();
    //     const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    //     if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
    //       setActivePage('Projects');
    //     } else {
    //       setActivePage('Home');
    //     }
    //   }
    // };

    // // Add scroll event listener when the component mounts
    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);

    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='container'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {/*must pass reference to function in onClick??? by defining an arrow function it does not invoke it unless it is clicked on (it is just a reference to the function), '
                without using arrow function it stuff gets re-renders on infinite loop because when the componenet renders it is will call the function and 
                since when the state of the object changes it causes the object to re-render causing an infinite loop*/}
                <Nav.Link className={activePage === 'Home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => setActivePage('Home')}>
                  <Link to = "/Miranda-101" className='link'>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link className={activePage === 'Resume' ? 'active-navbar-link' : 'navbar-link'} onClick={() => setActivePage('Resume')}>
                  <Link to = "/resume" className='link'>
                    Resume
                  </Link>
                </Nav.Link>
                <Nav.Link className={activePage === 'Projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => setActivePage('Projects')}>
                  <Link to = "/projects"  className='link'>
                      Projects
                  </Link>
                </Nav.Link>
            </Nav>
            <span className="navbar-text">
                {/* you can apply custom and css styling in the className*/}
              <div className="social-links d-flex align-items-center"> {/* d-flex means display flex and aligns items center aligns stuff on cross axis (in this case vertical axis) */}
                <a href="https://www.linkedin.com/in/miranda-chen-70a200211/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedIN} alt="LinkedIn" />
                    <span className="ms-1">LinkedIn</span>
                </a>
                <a href="https://github.com/m-chenie" className="ms-3" target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} className="social-icon" alt="Github" />
                  <span className="ms-1">Github</span>
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;
  
