import React from "react"
import TextField from "material-ui/TextField"
import Toggle from "material-ui/Toggle"

export const TextFieldWrapper =
  ({ style, input, label, meta: { touched, error }}) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    style={style}
    errorText={touched && error}
    {...input}
  />

export const ToggleWrapper = ({ input, label, style }) =>
  <Toggle
    label={label}
    style={style}
    defaultToggled={input.value ? true : false}
    onToggle={input.onChange}
  />
