import { createActions } from "redux-actions"
import { Map } from "immutable"

const shoryu = Map({
  name: "",
  leader: false
})

export default createActions({
  addShoryu: () => shoryu,
  removeShoryu: index => index
})
