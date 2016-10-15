import React from "react";
import { Route, IndexRoute } from 'react-router';
import App from "./app";
import Home from './home';
import AsyncSample from './async-sample';

export default
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/async-sample" component={AsyncSample} />
  </Route>;
