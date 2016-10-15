import React from "react"
import { CardText } from "material-ui/Card"

const CompanyInfoNote = ({ expandable, note }) =>
  <CardText expandable={expandable}>
    {note}
  </CardText>

CompanyInfoNote.propTypes = {
  expandable: React.PropTypes.bool,
  note: React.PropTypes.string
}

CompanyInfoNote.defaultProps = {
  expandable: true
}

export default CompanyInfoNote
