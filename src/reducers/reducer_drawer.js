import { TOGGLE_DRAWER } from "../actions";

export default function(state = false, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return action.payload;

    default:
      return state;
  }
}
