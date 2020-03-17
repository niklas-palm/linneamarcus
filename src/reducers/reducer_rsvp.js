import { UPDATE_GUEST, ADD_GUEST, DELETE_GUEST, RESET_GUEST } from "../actions";

const emptyGuest = {
  name: "",
  spec: "",
  friday: false,
  ride: false
};

const init = {
  email: "",
  info: [{ ...emptyGuest }]
};

export default function(state = init, action) {
  switch (action.type) {
    case UPDATE_GUEST:
      return { ...action.payload };

    case RESET_GUEST:
      return init;

    case ADD_GUEST:
      state.info.push({ ...emptyGuest });
      return { ...state };

    case DELETE_GUEST:
      state.info.splice(action.payload, 1);
      return { ...state };

    default:
      return state;
  }
}
