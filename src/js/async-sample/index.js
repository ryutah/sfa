import React from "react"
import Company from "./components/Company"
import Search from "./components/Search"
import { Range } from "immutable"

const style = {
  header: {
    background: "#eee",
    display: "flex",
    alignItems: "center"
  },
  headerRight: {
    position: "absolute",
    right: "3rem"
  }
}

const AsyncSample = () =>
  <div style={{ maxWidth: "1720px", margin: "0 auto" }}>
    <h2>会社一覧</h2>
    <Search />
    {Range(0, 10).map(() => <Company />)}
  </div>

export default AsyncSample
