import React from "react"
import { Card, CardHeader, CardText } from "material-ui/Card"
import { blue500 } from "material-ui/styles/colors"

import SearchForm from "./SearchForm"

const style ={
  card: {
    margin: "0.5rem"
  },
  cardHeader: {
    color: blue500
  },
  cardText: {
    textAlign: "center"
  }
}

export default (props) => {
  return <Card style={style.card}>
    <CardHeader
      title="検索条件"
      actAsExpander={true}
      showExpandableButton={true}
      titleStyle={style.cardHeader}
    />
    <CardText expandable={true} style={style.cardText}>
      <SearchForm onSubmit={values => console.log(values)}/>
    </CardText>
  </Card>
}
