
import {combineReducers} from 'redux'
import gamesReducer from '../reducers/gamesReducer'
import detailsReducer from '../reducers/detailsReducer'

const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer
})

export default rootReducer