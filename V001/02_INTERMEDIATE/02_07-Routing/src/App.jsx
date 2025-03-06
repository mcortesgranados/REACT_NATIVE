import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>
     Expample to use advance Routes
    </p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>
      Computer Science and Artificial Intelligence Engineering. I have
      experience in storage, backups, databases, software development, and
      process automation. Passionate about programming, data science, and
      artificial intelligence. I am guided by values of ethics.
    </p>
  </div>
);
const Contact = () => (
  <div>
    <h2>About</h2>
    <p>
      brayanbernal3@gmail.com
    </p>
  </div>
);

const App = () => {
  return (
    <Router>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;