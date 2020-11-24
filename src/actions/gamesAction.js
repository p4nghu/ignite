import Axios from "axios";
import { newGamesURL, popularGamesURL, upcomingGamesURL ,searchGamesURL} from "../api";

export const loadGames = async (dispatch) => {
  const popularData = await Axios.get(popularGamesURL());
  const upcomingData = await Axios.get(upcomingGamesURL());
  const newGamesData = await Axios.get(newGamesURL());

  dispatch({
    type: "games/fetchGames",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const SearchGames = query => async (dispatch) => {
  const {data: {results: search}} = await Axios.get(searchGamesURL(query));
  dispatch({
    type: "games/search",
    payload: {
      search
    }
  })
};
