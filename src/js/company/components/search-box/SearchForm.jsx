import React from "react"
import { CardText } from "material-ui/Card"
import { Field, FieldArray, reduxForm } from "redux-form/immutable"
import FlatButton from "material-ui/FlatButton"
import AddCircle from "material-ui/svg-icons/content/add-circle"

import { blue500 } from "material-ui/styles/colors"

import {
  TextFieldWrapper,
  ToggleWrapper
} from "../../../common/components/FieldWrapper"
import Shoryu from "./Shoryu"

const style = {
  cardText: {
    textAlign: "center"
  },
  textField: {
    width: "90%"
  },
  toggleDiv: {
    marginTop: "1rem",
    display: "inline-block",
    width: "90%",
    textAlign: "left"
  },
  toggle: {
    width: "8rem"
  },
  addShoryu: {
    color: blue500
  },
  submitButton: {
    marginTop: "1rem"
  }
}

const shoryus = ({ fields }) =>
  <div>
    <div>
      {fields.map((shoryu, index) =>
        <Shoryu
          inputName={`${shoryu}.shoryu`}
          toggleName={`${shoryu}.reader`}
          onClickRemove={() => fields.remove(index)}
          key={index}
        />
      )}
    </div>
    <FlatButton
      label="商流追加"
      labelPosition="before"
      icon={<AddCircle />}
      style={style.addShoryu}
      onClick={() => fields.push({})}
    />
  </div>

const SearchForm = props =>
  <CardText expandable={true} style={style.cardText}>
    <form onSubmit={props.handleSubmit}>
      <Field
        style={style.textField}
        name="companyName"
        component={TextFieldWrapper}
        label="会社名"
      />
      <Field
        style={style.textField}
        name="address"
        component={TextFieldWrapper}
        label="住所"
      />
      <Field
        style={style.textField}
        name="advBusiness"
        component={TextFieldWrapper}
        label="得意業種"
      />
      <div style={style.toggleDiv}>
        <Field
          name="ukeoi"
          label="請負有無"
          style={style.toggle}
          component={ToggleWrapper}
        />
      </div>
      <FieldArray name="shoryus" component={shoryus} />
      <FlatButton
        type="submit"
        label="検索"
        primary={true}
        style={style.submitButton}
      />
    </form>
  </CardText>

export default reduxForm({
  form: "CompanySearch"
})(SearchForm)
