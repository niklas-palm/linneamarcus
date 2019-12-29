import { combineReducers } from "redux";
import DrawerReducer from "./reducer_drawer";
import RouterReducer from "./reducer_router";

const rootReducer = combineReducers({
  drawer: DrawerReducer,
  route: RouterReducer
});

export default rootReducer;
