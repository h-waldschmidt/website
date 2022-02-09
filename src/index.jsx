import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
