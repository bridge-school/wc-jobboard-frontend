const initialState = null;

export const jobsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_JOBS': 
            return action.payload

        default: return state;
    }
}