import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonPrimary from '../buttons/ButtonPrimary';

function NavContent() {
    return (
        <Navbar bg="light" expand="lg">
          <Container>        
            <Navbar.Brand href="#home">The YAY Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
                <NavLink to="/news" className="nav-link">News</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </Nav>
              <Form>
                <Row className="align-items-center">
                  <Col>
                    <Form.Control type="text" placeholder="search" className="mr-sm-2" />
                  </Col>
                  <Col>
                    <ButtonPrimary>Go</ButtonPrimary>
                  </Col>
                </Row>
              </Form>
            </Navbar.Collapse>
          </Container>                
        </Navbar>
    )
}

export default NavContent;
