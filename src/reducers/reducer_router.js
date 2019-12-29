import { NAVIGATE_TO } from "../actions";

export const routes = {
  LANDING: "landing",
  RSVP: "rsvp",
  FRIDAY: "friday"
};

export default function(state = routes.LANDING, action) {
  switch (action.type) {
    case NAVIGATE_TO:
      return action.payload;

    default:
      return state;
  }
}
