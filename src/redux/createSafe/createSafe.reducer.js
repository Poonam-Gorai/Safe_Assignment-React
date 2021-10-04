const INITIAL_STATE = {
    safeData: {
        safeName: '',
        owner: '',
        type: '',
        description:'',
    }
};

const createSafeReducer =  (state = INITIAL_STATE,action) =>{
    switch(action.type) {
        case "SET_CREATE_SAFE":
            return{
                ...state,
                safeData: action.payload,
            };
            default:
                return state;
    }
};

export default createSafeReducer;