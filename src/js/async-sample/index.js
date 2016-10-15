import React from "react";
import Company from "./components/Company";
import Search from "./components/Search";
import _ from "underscore";

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
};

const AsyncSample = () =>
  <div style={{ maxWidth: "1720px", margin: "0 auto" }}>
    <h2>会社一覧</h2>
    <Search />
    {_.range(10).map(() => <Company />)}
  </div>;

export default AsyncSample;
