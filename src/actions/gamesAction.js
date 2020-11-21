import Axios from "axios"
import { newGamesURL, popularGamesURL,  upcomingGamesURL } from "../api"

export const loadGames = async(dispatch) => {
  const popularData = await Axios.get(popularGamesURL())
  const upcomingData = await Axios.get(upcomingGamesURL())
  const newGamesData = await Axios.get(newGamesURL())
  
  dispatch({type: "games/fetchGames", payload: {
    popular: popularData.data.results,
    upcoming: upcomingData.data.results,
    newGames: newGamesData.data.results
  } })
}