export const TOGGLE_DRAWER = "toggle_drawer";

export const toggleDrawer = state => {
  return {
    type: TOGGLE_DRAWER,
    payload: state
  };
};
