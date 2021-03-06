import React from "react"
import { Route, IndexRoute } from "react-router"

import App from "./app"
import Home from "./home"
import AsyncSample from "./async-sample"
import Company from "./company"

export default
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/async-sample" component={AsyncSample} />
    <Route path="/company" components={Company} />
  </Route>
