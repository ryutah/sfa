import React from "react"
import _u from "underscore"

import mockData from "./CompanyInfoMock"
import SearchBox from "./containers/SearchBox"
import CompanyInfo from "./components/company-info/CompanyInfo"

const style = {
  maxWidth: "1720px",
  margin: "0 auto"
}

const companies = _u.range(1, 20).map((e) => (
  <CompanyInfo
    key={`${e}`}
    companyName={mockData.companyName}
    personName={mockData.personName}
    tel={mockData.tel}
    grade={mockData.grade}
    note={mockData.note}
  />
))

export default () =>
  <div style={style}>
    <h1>会社検索</h1>
    <SearchBox />
    {companies}
  </div>
