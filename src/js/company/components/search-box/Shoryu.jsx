import React from "react"
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton';
import { red500 } from "material-ui/styles/colors"
import RemoveCircle from "material-ui/svg-icons/content/remove-circle"
import { Field } from "redux-form/immutable"

import {
  TextFieldWrapper,
  ToggleWrapper
} from "../../../common/components/FieldWrapper"

const style = {
  paper: {
    display: "inline-block",
    width: "90%",
    textAlign: "left",
    padding: "0.5rem 1rem 2rem 1rem",
    margin: "1rem"
  },
  remButtonDiv: {
    textAlign: "right"
  },
  removeButton: {
    color: red500
  },
  textField: {
    width: "100%"
  },
  toggleDiv: {
    marginTop: "1rem",
    display: "inline-block",
    width: "90%",
    textAlign: "left"
  },
  toggle: {
    width: "8rem"
  }
}

const Shoryu = ({ inputName, toggleName, onClickRemove }) =>
  <Paper style={style.paper}>
    <div style={style.remButtonDiv}>
      <FlatButton
        label="削除"
        labelPosition="before"
        icon={<RemoveCircle />}
        style={style.removeButton}
        onClick={onClickRemove}
      />
    </div>
    <Field
      name={inputName}
      style={style.textField}
      label="メイン商流"
      component={TextFieldWrapper}
    />
    <div style={style.toggleDiv}>
      <Field
        name={toggleName}
        label="リーダー有無"
        component={ToggleWrapper}
        style={style.toggle}
      />
    </div>
  </Paper>

export default Shoryu
