import { createStore, combineReducers } from "redux";
import { todosReducer } from "./todos/reducers";

const rootReducer = combineReducers({
  todos: todosReducer,
})

export function configureStore() {
  const store = createStore(rootReducer);

  return store;
}
