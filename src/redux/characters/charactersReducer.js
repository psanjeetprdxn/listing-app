import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from "./charactersTypes";

const initialState = {
  loading: null,
  data: [],
  error: "",
  itemsCountPerPage: 20,
  totalItemsCount: 0,
  pageRangeDisplayed: 5,
  pageNumber: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: "",
        totalItemsCount: action.payload.headers.link
          .split(", ")
          [action.payload.headers.link.split(", ").length - 1].substring(
            action.payload.headers.link
              .split(", ")
              [action.payload.headers.link.split(", ").length - 1].indexOf(
                "page="
              ) + 5,
            action.payload.headers.link
              .split(", ")
              [action.payload.headers.link.split(", ").length - 1].indexOf("&")
          ),
      };

    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
