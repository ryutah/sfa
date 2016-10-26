import { handleActions } from "redux-actions"
import { Map } from "immutable"

const initState = Map({
  showSideBar: false
})

export default handleActions({
  SIDEBAR_TOGGLE: state => {
    const show = state.get("showSideBar")
    return state.set("showSideBar", !show)
  }
}, initState)
