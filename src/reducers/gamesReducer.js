

const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  search: []
}

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "games/fetchGames":
      const {
        popular,
        upcoming,
        newGames
      } = action.payload
      return {
        ...state,
        popular,
        upcoming,
        newGames
      }
    default:
      return state
  }
}

export default gamesReducer

