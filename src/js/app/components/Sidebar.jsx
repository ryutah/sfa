import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import style from "../../../css";

function menuItemStyle(itemPath) {
  return location.pathname === itemPath ? style.selected : "";
}

const styles = {
  drawerStyle: {
    paddingTop: "3.5rem"
  },

  appBarStyle: {
    position: "fixed",
    margin: 0,
    top: 0,
    left: 0,
    cursor: "pointer"
  }
};

const Sidebar = props =>
  <Drawer
    docked={false}
    containerStyle={styles.drawerStyle}
    open={props.showSideBar}
    onRequestChange={props.onRequestChange}
  >
    <AppBar
      className={style.mainColor}
      style={styles.appBarStyle}
      showMenuIconButton={false}
      title="SFA"
      onTitleTouchTap={props.onHomeMenuItemTouch}
    />
    <MenuItem
      className={menuItemStyle("/async-sample")}
      primaryText="ASYNC SAMPLE"
      onTouchTap={props.onAsyncMenuItemTouch}
    />
  </Drawer>;

export default Sidebar;
