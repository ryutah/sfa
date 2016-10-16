import React from "react"
import { connect } from "react-redux"

import SearchBox from "../components/search-box/SearchBox"
const mapStateToProps = ({ company }) => company

export default connect(mapStateToProps)(SearchBox)
