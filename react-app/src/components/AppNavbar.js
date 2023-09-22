import React, { useContext } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import face from '../img/download.jpg';
import instagram from '../img/instagram.jpg';
import google from '../img/google.jpg';

function AppNavbar() {
  const { user } = useContext(UserContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand as={Link} to="/">RENT A CAR</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {user.id ? (
            <NavItem>
              <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
              </NavItem>
            </>
          )}
        </Nav>
        <div className="position-absolute top-0 end-0 p-2">
          <a href="https://www.facebook.com/profile.php?id=100076060882013">
            <img src={face} alt="facebook" width="60" className="p-2" />
          </a>
          <a href="https://www.instagram.com/miney5000/">
            <img src={instagram} alt="instagram" width="60" className="p-2" />
          </a>
          <a href="mailto:your.qwertyjay6@gmail.com">
            <img src={google} alt="Email" width="60" className="p-2" />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
