import React from "react";
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Remove from 'material-ui/svg-icons/content/remove';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const style = {
  paper: {
    display: "inline-block",
    width: "90%",
    textAlign: "left",
    padding: "0.5rem 1rem 2rem 1rem",
    margin: "1rem"
  },
  removeDiv: {
    textAlign: "right"
  },
  textField: {
    paddingTop: "0",
    width: "100%"
  },
  checkBox: {
    width: "8rem"
  }
};

export default () =>
  <Paper style={style.paper}>
    <div style={style.removeDiv}>
      <FloatingActionButton mini={true} secondary={true}>
        <Remove />
      </FloatingActionButton>
    </div>
    <TextField
      name="shoryu"
      floatingLabelText="メイン小流"
      style={style.textField}
    />
    <Checkbox
      label="リーダー有無"
      labelPosition="left"
      style={style.checkBox}
    />
  </Paper>;
