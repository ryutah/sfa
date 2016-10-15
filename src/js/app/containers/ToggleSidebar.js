import React from "react";
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Sidebar from "../components/Sidebar";
import action from "../actions";

const mapStateToProps = ({ common }) => common;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRequestChange: open => dispatch(action.sidebarToggle()),
    onHomeMenuItemTouch: e => {
      dispatch(action.sidebarToggle());
      browserHistory.push("/");
    },
    onAsyncMenuItemTouch: e => {
      dispatch(action.sidebarToggle());
      browserHistory.push("/async-sample");
    }
  };
};

const ToggleSidebar = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default ToggleSidebar;
