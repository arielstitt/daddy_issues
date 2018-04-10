import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/issues" />
        </div>
      </Router>
    );
  }
}

export default App;
