import {
  GET_COINTOSS,
  ADD_COINTOSS,
  UPDATE_COINTOSS,
  DELETE_COINTOSS,
} from "./CoinTossTypes";

const initialState = {
  CoinToss: [],
};

export const CoinTosssReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINTOSS:
      return {
        ...state,
        CoinToss: action.payload,
      };
    case ADD_COINTOSS:
      return {
        ...state,
        CoinToss: [...state.CoinToss, action.payload],
      };
    case DELETE_COINTOSS:
      return {
        ...state,
        CoinToss: state.CoinToss.filter(
          (item, index) => item.id !== action.payload
        ),
      };
    case UPDATE_COINTOSS:
      const updatedCoinToss = state.CoinToss.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return {
        ...state,
        CoinToss: updatedCoinToss,
      };
    default:
      return state;
  }
};
