import { ADD_USER } from '../constants/constants.js';

const initialState = {
    user : []
}

export default function userReducer(state = initialState, action){
    switch(action.type){
        case ADD_USER:
            return {
                ...state,
                user : [
                    ...state.user,
                    action.payload
                ]
            }
        default :
            return state;
    }
}