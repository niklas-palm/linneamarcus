import { combineReducers } from "redux";
import DrawerReducer from "./reducer_drawer";
import RouterReducer from "./reducer_router";
import RsvpReducer from "./reducer_rsvp";
import AuthReducer from "./reducer_auth";

const rootReducer = combineReducers({
  drawer: DrawerReducer,
  route: RouterReducer,
  rsvp: RsvpReducer,
  auth: AuthReducer
});

export default rootReducer;
