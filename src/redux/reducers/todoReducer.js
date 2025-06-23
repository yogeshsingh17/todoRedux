import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants/constants.js';

const initialState = {
    todos : []
}

export default function todoReducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO :
            return {
                ...state,
                todos : [
                    ...state.todos,
                    {id : uuidv4(), text : action.payload, completed : false}
                ]
            }
        case REMOVE_TODO :
            return {
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.payload)
            }
        case TOGGLE_TODO :
            return {
                ...state,
                todos : state.todos.map(
                        todo => {
                            if(todo.id === action.payload){
                                return {
                                    ...todo,
                                    completed : !todo.completed
                                }
                        } else {
                            return todo;
                        }
                    }
                )
            }
        default :
            return state;
    }
}