import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import './App.css';
import LoginView from "./components/LoginView"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/issues" />
          <Route exact path="/login" component={LoginView} />
        </div>
      </Router>
    );
  }
}

export default App;
