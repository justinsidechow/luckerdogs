import { push } from "connected-react-router";

export const loginButton = () => (dispatch) => {
  dispatch(push("/login"));
};

export const registerButton = () => (dispatch) => {
  dispatch(push("/register"));
};

export const titleButton = () => (dispatch) => {
  dispatch(push("/"));
};
