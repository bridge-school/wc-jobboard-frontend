import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
// import StyledButton from './components/common/StyledButton';
import JobForm from './pages/create-job/JobForm';
import MainPage from './pages/posted-jobs/MainPage';
import Navigation from './components/navigation/Navigation';


const CreateJobPage = (props) => {
  return(
    <div>
      <Navigation path={props.path} color={props.color} title={props.title} />
      <JobForm/>
    </div>
  )
}

class App extends Component {
  render(props) {
    return (
        <Router>
          <div> 
            <Route path="/jobs/post-a-job" exact component={(props) => <CreateJobPage path={"/"} color={"secondary"} title={"Go back"}/>} />
            <Route path="/" exact component={(props) => <MainPage path={"/jobs/post-a-job"} color={"primary"} title={"Post a job"}/>} />
          </div>
        </Router>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
