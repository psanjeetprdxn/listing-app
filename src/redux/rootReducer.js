import { combineReducers } from "redux";
import charactersReducer from "./characters/charactersReducer";

const rootReducer = combineReducers({
  charactersData: charactersReducer,
});

export default rootReducer;
