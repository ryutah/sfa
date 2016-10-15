import { combineReducers } from 'redux';
import common from "./app/reducers";
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  common,
  routing: routerReducer
});

export default reducers;
