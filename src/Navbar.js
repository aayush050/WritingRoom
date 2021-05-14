import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar1 = () => {
  return (
    <div>
<header className ="head"></header>
<Navbar bg="dark" expand="lg" fixed ="top" className ="navbar">
<Link to="/"><Navbar.Brand >Writing Room</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto active">
      <Nav.Link ><Link to="/blogs"  className ="style-link">Blogs</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse> 
</Navbar>
</div>
  );
}
export default Navbar1;