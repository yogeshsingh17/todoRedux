import { ADD_USER } from '../constants/constants.js';

export function addUserActionCreator(user){
    return {
        type : ADD_USER,
        payload : user
    }
}