import React from "react"
import { CardText } from "material-ui/Card"

import { nl2br } from "../../../common/utils"

const CompanyInfoNote = ({ expandable, note }) =>
  <CardText
    expandable={expandable}
    dangerouslySetInnerHTML={{ __html: nl2br(note) }}
  />

CompanyInfoNote.propTypes = {
  note: React.PropTypes.string,
  expandable: React.PropTypes.bool
}

export default CompanyInfoNote
