import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StyledButton from './components/common/StyledButton';
import JobForm from './pages/create-job/JobForm';
// import Navigation from './components/navigation/Navigation';


const CreateJobPage = ({classes}) => {
  return(
    <div>
      <StyledButton component={Link} to="/" color="secondary">
        Go back
      </StyledButton>
      <JobForm/>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <StyledButton component={Link} to="/jobs/post-a-job" color="primary">
            Post a Job
          </StyledButton>

          {/* <Navigation /> */}
          <Route path="/jobs/post-a-job" exact component={CreateJobPage} />
        </div>
      </Router>
    );
  }
}

export default App;
