import { combineReducers } from 'redux'
import dogBreed from './dogBreed'
import dogGameOne from './dogGameOne'

export default combineReducers({
  dogBreed,
  dogGameOne
})