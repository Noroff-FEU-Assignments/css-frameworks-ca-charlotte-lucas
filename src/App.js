import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Home from './components/home/Home';
import News from './components/news/News';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>

      <div className="wrapper"> 
      <Container>
        <Navbar bg="light" expand="lg">        
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
                  <Button variant="primary" type="submit">
                    Go
                  </Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>                
        </Navbar>
      </Container>
       

        <hr />

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
        
        <Footer />
    </Router>
  );
}

export default App;
