import axios from 'axios'
import {detailsURL, screenShotsURL} from '../api'
export const loadDetails = id => async(dispatch) => {
  dispatch({type: 'details/loadingDetails'})
  const {data: details} = await axios.get(detailsURL(id))
  const {data: {results: screenShots}} = await axios.get(screenShotsURL(id))
  dispatch({
    type: "details/fetchDetails",
    payload: {
      details,
      screenShots
    }
  })
}

