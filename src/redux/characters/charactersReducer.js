import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  CHANGE_ACTIVE_PAGE,
} from "./charactersTypes";

const initialState = {
  loading: null,
  data: [],
  error: "",
  totalItemsCount: 0,
  activePage: 1,
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

    case CHANGE_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
