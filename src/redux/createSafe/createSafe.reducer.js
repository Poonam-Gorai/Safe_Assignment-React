
const INITIAL_STATE = {
    safes:[],
};


const createSafeReducer =  (state = INITIAL_STATE,action) =>{
    switch(action.type) {
       
        case "SET_CREATE_SAFE":
            return{
                ...state,
                safes: [action.payload, ...state.safes],
            };
        case "DELETE_ITEM":
            return{
                ...state,
                safes:state.safes.filter((safes,index) => index !== action.payload)
            }
        case "EDIT_DATA":
            return{
                ...state,
                //the index value that we will get if we will get then we will edit otherwise it will work as it is
                safes:state.safes.filter((safes,index) => index !== action.payload.index ? action.payload : safes)
            }
            default:
                return state;
    }
};

export default createSafeReducer;