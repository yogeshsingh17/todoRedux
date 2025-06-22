import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants/constants.js';

export function addTodoActionCreator(todo){
    return {
        type : ADD_TODO,
        paylaod : todo
    }
}

export function removeTodoActionCreator(todoId){
    return {
        type : REMOVE_TODO,
        payload : todoId
    }
}

export function toggleTodoActionCreator(todoId){
    return {
        type : TOGGLE_TODO,
        payload : todoId
    }
}