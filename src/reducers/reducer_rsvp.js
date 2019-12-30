import { UPDATE_GUEST } from "../actions";

export const init = {
  guest1: {
    name: "",
    mail: "",
    spec: "",
    friday: false,
    ride: false
  },
  guest2: {
    name: "",
    spec: "",
    friday: false,
    ride: false
  },
  guest3: {
    name: "",
    spec: "",
    friday: false,
    ride: false
  },
  guest4: {
    name: "",
    spec: "",
    friday: false,
    ride: false
  },
  guest5: {
    name: "",
    spec: "",
    friday: false,
    ride: false
  }
};

export default function(state = init, action) {
  switch (action.type) {
    case UPDATE_GUEST:
      return { ...action.payload };

    default:
      return state;
  }
}
