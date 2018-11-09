import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import StyledButton from './components/common/StyledButton';
import JobForm from './pages/create-job/JobForm';
<<<<<<< da14a4e60640f4d108fab5f9bef6a733795a80cc
<<<<<<< 443c47587041ab3470d52f368cd738029351288f
import MainPage from './pages/posted-jobs/MainPage';
import Navigation from './components/navigation/Navigation';
=======
import JobPostCard from './components/common/JobPostCard';
// import Navigation from './components/navigation/Navigation';
>>>>>>> starting job post card

// Redux
import { Provider } from 'react-redux';
import { rootReducer } from './reducer'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension's options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(
  rootReducer,
  enhancer
);
=======
import JobPostCard from './components/common/JobPostCard';
// import Navigation from './components/navigation/Navigation';
import MainPage from './pages/posted-jobs/MainPage';
import Navigation from './components/navigation/Navigation';
>>>>>>> resolving conflicts

const CreateJobPage = (props) => {
  return(
    <div>
      <Navigation path={props.path} color={props.color} title={props.title} />
      <JobForm/>
    </div>
  )
}

class App extends Component {

  componentDidMount() {
    fetch('/health')
    .then(res => res.json())
    .then(jobs => console.log(jobs));
  }

  render(props) {
    return (
<<<<<<< 443c47587041ab3470d52f368cd738029351288f
      <Provider store={store}>        
        <Router>
          <div> 
            <Route path="/jobs/post-a-job" exact component={(props) => <CreateJobPage path={"/"} color={"secondary"} title={"Go back"}/>} />
            <Route path="/" exact component={(props) => <MainPage path={"/jobs/post-a-job"} color={"primary"} title={"Post a job"}/>} />
          </div>
        </Router>
      </Provider>
=======
      <React.Fragment>
      <Router>
<<<<<<< da14a4e60640f4d108fab5f9bef6a733795a80cc
        <div>
          <StyledButton component={Link} to="/jobs/post-a-job" color="primary">
            Post a Job
          </StyledButton>

          {/* <Navigation /> */}
          <Route path="/jobs/post-a-job" exact component={CreateJobPage} />

=======
        <div> 
          <Route path="/jobs/post-a-job" exact component={(props) => <CreateJobPage path={"/"} color={"secondary"} title={"Go back"}/>} />
          <Route path="/" exact component={(props) => <MainPage path={"/jobs/post-a-job"} color={"primary"} title={"Post a job"}/>} />
>>>>>>> resolving conflicts
        </div>
      </Router>
      <JobPostCard />
      </React.Fragment>
>>>>>>> starting job post card
    );
  }
}

export default App;
