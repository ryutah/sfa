import React from "react"
import { CardText } from "material-ui/Card"
import { ListItem } from 'material-ui/List'
import Person from 'material-ui/svg-icons/social/person'
import Grade from 'material-ui/svg-icons/action/grade'
import Phone from 'material-ui/svg-icons/hardware/phone-android'

const CompanyInfoOverView = ({ personName, grade, tel }) =>
  <CardText>
    <ListItem primaryText={personName} leftIcon={<Person />} />
    <ListItem primaryText={grade} leftIcon={<Grade />} />
    <ListItem primaryText={tel} leftIcon={<Phone />} />
  </CardText>

CompanyInfoOverView.propTypes = {
  personName: React.PropTypes.string.isRequired,
  grade: React.PropTypes.string,
  tel: React.PropTypes.string
}

export default CompanyInfoOverView
