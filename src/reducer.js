import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { jobsReducer } from './pages/posted-jobs/jobsReducer';



export const rootReducer = combineReducers({
<<<<<<< 51b99095893bcaadb47bdb927468596b9df57370
    form: formReducer
})

// const selectCityReducer = 
=======
    form: formReducer,
    jobs: jobsReducer,
})
>>>>>>> mapping job post card, setting up redux and actions
