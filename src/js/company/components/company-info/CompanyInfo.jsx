import React from "react"
import { Card, CardHeader } from "material-ui/Card"

import Header from "./CompanyInfoHeader"
import OverView from "./CompanyInfoOverView"
import Note from "./CompanyInfoNote"

const style = {
  card: {
    margin: "0.5rem"
  },
  cardHeader: {
    background: "#eee",
    display: "flex",
    alignItems: "center",
    paddingRight: "3.4rem"
  }
}

export default ({ companyName, personName, grade, tel, note }) =>
  <Card style={style.card}>
    <CardHeader
      title={companyName}
      actAsExpander={true}
      showExpandableButton={true}
      style={style.cardHeader}
    >
      <Header companyName={companyName} />
    </CardHeader>
    <OverView
      personName={personName}
      grade={grade}
      tel={tel}
    />
    <Note expandable={true} note={note}/>
  </Card>
