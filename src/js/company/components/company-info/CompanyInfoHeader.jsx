import React from "react"
import { CardHeader } from "material-ui/Card"
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import {red500, blue500} from 'material-ui/styles/colors'

const style = {
  cardHeader: {
    background: "#eee",
    display: "flex",
    alignItems: "center",
    paddingRight: "3.4rem"
  },
  headerRight: {
    position: "absolute",
    right: "2.7rem"
  }
}

const CompanyInfoHeader = ({ companyName, onEditClick, onDeleteClick }) =>
  <CardHeader
    title={companyName}
    actAsExpander={false}
    showExpandableButton={false}
    style={style.cardHeader}
  >
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
  </CardHeader>

CompanyInfoHeader.propTypes = {
  companyName: React.PropTypes.string.isRequired,
  onEditClick: React.PropTypes.func,
  onDeleteClick: React.PropTypes.func
}

CompanyInfoHeader.defaultProps = {
  onEditClick: e => {
    alert("CLICK EDIT")
  },
  onDeleteClick e => {
    alert("CLICK DELETE")
  }
}

export default CompanyInfoHeader
