import './sass/style.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavContent from './components/Nav/NavContent';
import Home from './components/pages/home/Home';
import News from './components/pages/news/News';
import Contact from './components/pages/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>

      <div className="wrapper"> 
      
        <NavContent />


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
