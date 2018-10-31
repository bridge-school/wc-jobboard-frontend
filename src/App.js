import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StyledButton from './components/common/StyledButton';

const Index = () => <h2>Post a new job</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <StyledButton component={Link} to="/jobs/post-a-job" color="primary">
            Post a Job
          </StyledButton>

          <Route path="/jobs/post-a-job" exact component={Index} />
        </div>
      </Router>
    );
  }
}

export default App;
