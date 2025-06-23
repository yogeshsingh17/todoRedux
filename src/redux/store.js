import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    todosState : todoReducer,
    userState : userReducer
})

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log("Store updated : ", store.getState());
})

export default store;