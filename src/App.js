import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import StyledButton from './components/common/StyledButton';
import JobForm from './pages/create-job/JobForm';
import MainPage from './pages/posted-jobs/MainPage';
import Navigation from './components/navigation/Navigation';

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
      <Provider store={store}>        
        <Router>
          <div> 
            <Route path="/jobs/post-a-job" exact component={(props) => <CreateJobPage path={"/"} color={"secondary"} title={"Go back"}/>} />
            <Route path="/" exact component={(props) => <MainPage path={"/jobs/post-a-job"} color={"primary"} title={"Post a job"}/>} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
