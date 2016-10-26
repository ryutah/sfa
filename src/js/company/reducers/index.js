import { Map } from "immutable"
import { handleActions } from "redux-actions"

const searchCond = Map({
  companyName: "",
  address: "",
  advantageBusiness: "",
  shoryu: [],
  ukeoi: false
})

const shoryu = handleActions({
  ADD_SHORYU: (state, action) => state.set('shoryu', state.shoryu),
  REMOVE_SHORYU: (state, action) => {
    const shoryus = state.shoryu.delete(action.payload)
    return state.set('shoryu', shoryus)
  }
}, searchCond)

export default shoryu
