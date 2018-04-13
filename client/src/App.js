import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import './App.css';
import LoginView from "./components/issues/LoginView"
import LoginForm from "./components/issues/LoginForm"
import IssuesListView from './components/issues/IssuesListView';
import About from './components/AboutUs'
import SingleIssueView from './components/issues/SingleIssueView';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path="/issues" /> */}
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/issues" component={IssuesListView} />
          {/* <Route exact path="/issues" component={SingleIssueView} /> */}
          <Route path="/issues/:id" component={SingleIssueView} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
