import React from "react";
import { connect } from "react-redux";
import AppBar from 'material-ui/AppBar';
import classNames from "classnames";
import actions from "../actions";
import style from "../../../css";

const appBarStyle = {
  position: "fixed",
  margin: 0,
  top: 0,
  left: 0
};

const appBar = ({ dispatch }) =>
  <AppBar
    className={style.mainColor}
    style={appBarStyle}
    onLeftIconButtonTouchTap={e => dispatch(actions.sidebarToggle())}
    zDepth={0}
  />;

export default connect()(appBar);
