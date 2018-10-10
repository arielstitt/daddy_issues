import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import './App.css';
import LoginView from "./components/issues/LoginView"
import LoginForm from "./components/issues/LoginForm"
import IssuesListView from './components/issues/IssuesListView';
import About from './components/AboutUs'
import SingleIssueView from './components/issues/SingleIssueView';
import CandleListView from './components/merchandise/CandleListViews'
import ShirtListView from './components/merchandise/ShirtListView';

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
          <Route exact path="/candles" component={CandleListView} />
          <Route exact path="/shirts" component={ShirtListView} />
        </div>
      </Router>
    );
  }
}

export default App;
