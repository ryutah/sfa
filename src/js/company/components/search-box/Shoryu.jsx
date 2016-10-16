import React from "react"
import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Remove from 'material-ui/svg-icons/content/remove'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'

import actions from "../../actions"

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
  textField: {
    width: "100%"
  }
}

const Shoryu = ({ index, shoryu, onRemoveClick, dispatch }) =>
  <Paper key={index} style={style.paper}>
    <div style={style.remButtonDiv}>
      <FloatingActionButton
        mini={true}
        secondary={true}
        onClick={dispatch.removeShoryu(index)}
      >
        <Remove />
      </FloatingActionButton>
    </div>
    <TextField
      value={shoryu.name}
      floatingLabelText="メイン商流"
      style={style.textField}
    />
    <Toggle
      label="リーダー有無"
      defaultToggled={shoryu.leader}
    />
  </Paper>

Shoryu.propTypes = {
  index: React.PropTypes.number,
  shoryu: React.PropTypes.object,
  onRemoveClick: React.PropTypes.func
}

export default Shoryu
