import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import "../css";
import reducer from "./reducer";
import routes from "./routes";

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
const history = syncHistoryWithStore(browserHistory, store);

const App = () =>
    <Router routes={routes} history={history} />;

injectTapEventPlugin();
render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("app")
);
