import {
  GET_COINTOSS,
  ADD_COINTOSS,
  UPDATE_COINTOSS,
  DELETE_COINTOSS,
} from "./CoinTossTypes";

const initialState = {
  coinToss: [],
};

export const CoinTosssReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINTOSS:
      return {
        ...state,
        coinToss: action.payload,
      };
    case ADD_COINTOSS:
      return {
        ...state,
        coinToss: [...state.coinToss, action.payload],
      };
    case DELETE_COINTOSS:
      return {
        ...state,
        coinToss: state.coinToss.filter(
          (item, index) => item.id !== action.payload
        ),
      };
    case UPDATE_COINTOSS:
      const updatedCoinToss = state.coinToss.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return {
        ...state,
        coinToss: updatedCoinToss,
      };
    default:
      return state;
  }
};
