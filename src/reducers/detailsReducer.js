const init = {
  details: {},
  screenShots: [],
  isLoading: true
}

const detailsReducer = (state=init, action) => {
  switch (action.type) {
    case "details/fetchDetails":
      return {
        ...state,
        ...action.payload,
        isLoading: false
      }
    case "details/loadingDetails":
      return {
        ...state,
        isLoading: true
      }
    default:
      return state
  }
}
export default detailsReducer