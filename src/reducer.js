import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { jobsReducer } from './pages/posted-jobs/jobsReducer';



export const rootReducer = combineReducers({
    form: formReducer,
    jobs: jobsReducer,
})
