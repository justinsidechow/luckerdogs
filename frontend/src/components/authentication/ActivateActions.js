import { push } from "connected-react-router";

export const PagePush = (redirectTo) => (dispatch) => {
  dispatch(push(redirectTo));
};
