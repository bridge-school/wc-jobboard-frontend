import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialTestState = {
    jobPost: 'test'
}

const testReducer = (state = initialTestState, action)=> {
    switch(action.type){
        default : return state;
    }
}
export const rootReducer = combineReducers({
    form: formReducer
})