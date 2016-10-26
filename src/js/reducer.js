import { combineReducers } from "redux-immutable"
import { reducer as form } from "redux-form/immutable"
import { LOCATION_CHANGE } from "react-router-redux"
import Immutable from "immutable"
import common from "./app/reducers"
import company from "./company/reducers"

const initialState = Immutable.fromJS({
  locationBeforeTransitions: null
})

const routing = (state = initialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({
      locationBeforeTransitions: action.payload
    })
  }
  return state
}

export default combineReducers({
  common,
  company,
  routing,
  form
})
