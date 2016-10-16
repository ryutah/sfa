import React from "react"
import { CardText } from "material-ui/Card"
import { Field, FieldArray, reduxForm } from "redux-form"
import TextField from "material-ui/TextField"
import FlatButton from "material-ui/FlatButton"
import FontIcon from "material-ui/FontIcon"
import AddCircle from "material-ui/svg-icons/content/add-circle"
import Toggle from "material-ui/Toggle"
import { blue500 } from "material-ui/styles/colors"

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

const renderTextField = ({ input, label, meta: { touched, error }}) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    style={style.textField}
    errorText={touched && error}
    {...input}
  />

const members = ({ fields }) => {
  return <ul>
    {fields.map((member, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove"
          onClick={() => fields.remove(index)}
        />
        <Field
          name={`${member}.firstName`}
          type="input"
          component={({ type, label }) => (
            <div>
              <label>{label}</label>
              <input type={type}/>
            </div>
          )}
        />
      </li>
    )}
    <FlatButton
      label="商流追加"
      labelPosition="before"
      icon={<AddCircle />}
      style={style.addShoryu}
      onClick={() => fields.push({})}
    />
  </ul>
}

const renderToggle = ({ input, label }) =>
  <Toggle
    label={label}
    style={style.toggle}
    defaultToggled={input.value ? true : false}
    onToggle={input.onChange}
  />

const SearchForm = props =>
  <CardText expandable={true} style={style.cardText}>
    <form onSubmit={props.handleSubmit}>
      <Field name="companyName" component={renderTextField} label="会社名" />
      <Field name="address" component={renderTextField} label="住所" />
      <Field name="advBusiness" component={renderTextField} label="得意業種" />
      <div style={style.toggleDiv}>
        <Field name="ukeoi" component={renderToggle} label="請負有無" />
      </div>
      <FieldArray name="members" component={members} />
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
