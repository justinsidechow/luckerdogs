import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { signupReducer } from "./components/signup/SignupReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer,
  });

export default createRootReducer;
