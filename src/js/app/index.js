import React from "react"
import AppBar from "./components/AppBar"
import Footer from "./components/Footer"
import ToggleSidebar from "./containers/ToggleSidebar"

export default ({ children }) =>
  <div>
    <AppBar />
    <ToggleSidebar />
    {children}
    <Footer />
  </div>
