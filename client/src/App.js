import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import './App.css';
import LoginView from "./components/LoginView"
import LoginForm from "./components/LoginForm"
import IssuesListView from './components/IssuesListView';
import About from './components/AboutUs'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage}/>
          {/* <Route exact path="/issues" /> */}
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/issues" component={IssuesListView} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
