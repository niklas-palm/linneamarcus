export const TOGGLE_DRAWER = "toggle_drawer";

export const NAVIGATE_TO = "navigate_to";

export const UPDATE_GUEST = "update_guest";

export const TOGGLE_AUTH = "toggle_auth";

export const toggleDrawer = state => {
  return {
    type: TOGGLE_DRAWER,
    payload: state
  };
};

export const navigateTo = route => {
  return {
    type: NAVIGATE_TO,
    payload: route
  };
};

export const updateGuest = guest => {
  return {
    type: UPDATE_GUEST,
    payload: guest
  };
};

export const toggleAuth = auth => {
  return {
    type: TOGGLE_AUTH,
    payload: auth
  };
};
