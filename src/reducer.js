import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialTestState = {
    jobPostCollection: [ ] // This is where we will concat our collection of job post from db with our actions
}

const postedJobsReducer = (state = initialTestState, action)=> {
    switch(action.type){
        default : return state;
    }
}
export const rootReducer = combineReducers({
    postedJobs: postedJobsReducer,
    form: formReducer
})