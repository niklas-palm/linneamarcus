import { combineReducers } from "redux";
import DrawerReducer from "./reducer_drawer";

const rootReducer = combineReducers({
  drawer: DrawerReducer
});

export default rootReducer;
