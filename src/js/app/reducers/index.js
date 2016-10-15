import { handleActions } from "redux-actions";

const initState = {
  showSideBar: false
};

export default handleActions({
  SIDEBAR_TOGGLE: (state, action) => ({
    showSideBar: !state.showSideBar
  })
}, initState);
