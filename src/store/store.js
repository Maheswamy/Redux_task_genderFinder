import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import usersReducers from "./../reducer/usersReducer";

const configure = () => {
  const store = createStore(
    combineReducers({
      users: usersReducers,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configure;
