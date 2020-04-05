import Types from "../../actions/types";
const initialState = {
  reducerName: "popular page",
};

export default (state = { initialState }, action) => {
  switch (action.type) {
    case Types.POPULAR_FRESH_SUCCESS:
      return {
        ...state,
        [action.payload.storeName]: {
          data: action.payload.data,
          isLoading: false,
        },
      };

    case Types.POPULAR_FRESH:
      return {
        ...state,
        [action.payload.storeName]: {
          ...state[action.payload.storeName],
          isLoading: true,
        },
      };

    case Types.POPULAR_FRESH_FAIL:
      return {
        ...state,
        [action.payload.storeName]: {
          ...state[action.storeName],
          isLoading: false,
        },
      };

    default:
      return state;
  }
};
