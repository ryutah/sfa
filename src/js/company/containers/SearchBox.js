import React from "react"
import { connect } from "react-redux"

import SearchBox from "../components/search-box/SearchBox"
const mapStateToProps = state => state.get("company").toJS()

export default connect(mapStateToProps)(SearchBox)
