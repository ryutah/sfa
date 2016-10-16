import { combineReducers } from "redux"
import common from "./app/reducers"
import company from "./company/reducers"
import { reducer as formReducer } from "redux-form"
import { routerReducer } from "react-router-redux"

export default combineReducers({
  common,
  company,
  routing: routerReducer,
  form: formReducer
})
