import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from './components/Home';
import News from './components/News';
import Contact from './components/Contact';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Router>
      <div>

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
            <Form inline>
              <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Go</Button>
              </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
