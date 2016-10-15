import React from "react";
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import Add from 'material-ui/svg-icons/content/add';
import Shoryu from "./Shoryu";
import css from "../../../css";

const style = {
  container: {
    margin: "0.5rem"
  },
  cardText: {
    textAlign: "center"
  },
  textField: {
    width: "90%"
  },
  searchButton: {
    width: "90%"
  }
};

export default () =>
  <Card style={style.container}>
    <CardHeader
      title="検索条件"
      actAsExpander={true}
      showExpandableButton={true}
      titleStyle={{color: blue500}}
    />
    <CardText
      expandable={true}
      style={style.cardText}
    >
      <form>
        <div>
          <TextField
            name="companyName"
            floatingLabelText="会社名"
            style={style.textField}
          />
          <TextField
            name="address"
            floatingLabelText="住所"
            style={style.textField}
          />
          <TextField
            name="business"
            floatingLabelText="得意業種"
            style={style.textField}
          />
          <div style={{
            display: "inline-block",
            width: "90%",
            textAlign: "left"}}
          >
            <Checkbox
              label="請負有無"
              labelPosition="left"
              style={{width: "8rem"}}
            />
          </div>
        </div>
          <Shoryu/>
        <FlatButton
          label="検索"
          primary={true}
        />
      </form>
    </CardText>
  </Card>;
