import { handleActions } from "redux-actions"

const searchCond = {
  companyName: "",
  address: "",
  advantageBusiness: "",
  shoryu: [],
  ukeoi: false
}

const copyObj = obj => Object.assign({}, obj)
const copyArray = array => array.slice(0)

const shoryu = handleActions({
  ADD_SHORYU: (state, action) => {
    const newState = copyObj(state)
    const newShoryu = copyArray(state.shoryu)
    newShoryu.push(action.payload)
    newState.shoryu = newShoryu
    return newShoryu
  },
  REMOVE_SHORYU: (state, action) => {
    const newState = copyObj(state)
    const newShoryu = copyArray(state.shoryu)
    newShoryu.splice(action.payload, 1)
    newState.shoryu = newShoryu
    return newShoryu
  }
}, searchCond)

export default shoryu
