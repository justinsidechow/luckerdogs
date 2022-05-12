import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import {
  GET_COINTOSS,
  ADD_COINTOSS,
  UPDATE_COINTOSS,
  DELETE_COINTOSS,
} from "./CoinTossTypes";

export const getCoinToss = () => async (dispatch) => {
  await axios
    .get("/api/v1/cointoss/")
    .then((response) => {
      dispatch({
        type: GET_COINTOSS,
        payload: response.data,
      });
    })
    .catch((error) => {
      toastOnError(error);
    });
};

export const addCoinToss = (coinToss) => async (dispatch) => {
  await axios
    .post("/api/v1/cointoss/", coinToss)
    .then((response) => {
      dispatch({
        type: ADD_COINTOSS,
        payload: response.data,
      });
    })
    .catch((error) => {
      toastOnError(error);
    });
};

export const deleteCoinToss = (id) => (dispatch) => {
  axios
    .delete(`/api/v1/cointoss/${id}/`)
    .then((response) => {
      dispatch({
        type: DELETE_COINTOSS,
        payload: id,
      });
    })
    .catch((error) => {
      toastOnError(error);
    });
};

export const updateCoinToss = (id, coinToss) => async (dispatch) => {
  await axios
    .put(`/api/v1/cointoss/${id}/`, coinToss)
    .then((response) => {
      dispatch({
        type: UPDATE_COINTOSS,
        payload: response.data,
      });
    })
    .catch((error) => {
      toastOnError(error);
    });
};
