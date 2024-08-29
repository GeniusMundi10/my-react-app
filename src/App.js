import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import AnimatedComponent from './AnimatedComponent';  // <-- Import the animated component

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <h1>Hello, World!</h1>
            <p>This is my React app hosted on GitHub Pages!</p>
            <AnimatedComponent />  {/* <-- Add the animated component here */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
