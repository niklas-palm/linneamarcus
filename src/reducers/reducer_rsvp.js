import { UPDATE_GUEST, ADD_GUEST, DELETE_GUEST } from "../actions";

// export const init = {
//   guest1: {
//     name: "",
//     mail: "",
//     spec: "",
//     friday: false,
//     ride: false
//   },
//   guest2: {
//     name: "",
//     spec: "",
//     friday: false,
//     ride: false
//   },
//   guest3: {
//     name: "",
//     spec: "",
//     friday: false,
//     ride: false
//   },
//   guest4: {
//     name: "",
//     spec: "",
//     friday: false,
//     ride: false
//   },
//   guest5: {
//     name: "",
//     spec: "",
//     friday: false,
//     ride: false
//   }
// };

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

// Todo:
// We want to add / delete to the above payload.
//? Support:
// * addGuest / deleteGuest / updateGuest

// remove element from array:
// *  array.splice(index, numTimes). removes element in-place and returns the removed element

// payload.info.push(guest) adds a new empty guest. THE PUSH return the length
// of the array. This is information we can use when navigating to a new page etc.
// payload.info = [...payload.info, {...guest}] also dds a new empty guest.

export default function(state = init, action) {
  switch (action.type) {
    case UPDATE_GUEST:
      return { ...action.payload };

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
