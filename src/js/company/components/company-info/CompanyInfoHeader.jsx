import React from "react"
import IconButton from "material-ui/IconButton"
import FontIcon from "material-ui/FontIcon"
import { red500, blue500 } from "material-ui/styles/colors"

const style = {
  headerRight: {
    position: "absolute",
    right: "2.7rem"
  }
}

const CompanyInfoHeader = ({onEditClick, onDeleteClick }) =>
  <div style={style.headerRight}>
    <IconButton tooltip="変更" onClick={onEditClick}>
      <FontIcon className="material-icons" color={blue500}>
        edit
      </FontIcon>
    </IconButton>
    <IconButton tooltip="削除" onClick={onDeleteClick}>
      <FontIcon className="material-icons" color={red500}>
        delete
      </FontIcon>
    </IconButton>
  </div>

CompanyInfoHeader.propTypes = {
  onEditClick: React.PropTypes.func,
  onDeleteClick: React.PropTypes.func
}

CompanyInfoHeader.defaultProps = {
  onEditClick: e => {
    e.preventDefault()
    e.stopPropagation()
    alert("CLICK EDIT")
  },
  onDeleteClick: e => {
    e.preventDefault()
    e.stopPropagation()
    alert("CLICK DELETE")
  }
}

export default CompanyInfoHeader
