import React, { useContext } from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import Logo from '../../logos/Group1329.png';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div className="header">

      <Navbar bg="white" variant="light">
        <Container>
          <Link to="/"><Navbar.Brand href="#home"><img className="navbar__logo" src={Logo} alt=""/></Navbar.Brand></Link>
          <Nav className="ml-auto navbar-menu">
            <Nav.Link   className="nav__item" href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link className="nav__item" href="#donation">Donation</Nav.Link>
            <Nav.Link className="nav__item" href="#event">Event</Nav.Link>
            <Nav.Link className="nav__item " href="#blog">Blog</Nav.Link>
            <Nav.Link  className="nav__item register btn btn-primary text-light px-4">Register</Nav.Link>
            <Nav.Link  className="nav__item admin btn btn-dark px-4 text-light"><Link style={{color:"white", textDecoration:'none'}} to="/admin">Admin</Link></Nav.Link>
            {loggedInUser.email && <Nav.Link className="rounded border ml-2 text-dark rounded" href="">{loggedInUser.name}</Nav.Link>}
          </Nav>
        </Container>
      
      </Navbar>
    </div>
  );
};

export default Header;