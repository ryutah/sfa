import { createActions } from "redux-actions"

const shoryu = {
  name: "",
  leader: false
}

export default createActions({
  addShoryu: () => shoryu,
  removeShoryu: index => index
})
