
const INITIAL_STATE = {
    safes:[],
};

const createSafeReducer =  (state = INITIAL_STATE,action) =>{
    console.log(action.payload);
    switch(action.type) {
       
        case "SET_CREATE_SAFE":
            return{
                ...state,
                safes: [action.payload, ...state.safes],
            };
            default:
                return state;
    }
};

export default createSafeReducer;