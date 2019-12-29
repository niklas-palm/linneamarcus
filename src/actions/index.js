export const TOGGLE_DRAWER = "toggle_drawer";

export const NAVIGATE_TO = "navigate_to";

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
