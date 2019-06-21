import { combineReducers } from 'redux';
import dogBreed from './dogBreed';
import dogImages from './dogImages';
import dogGameOne from './dogGameOne';
import dogGameTwo from './dogGameTwo';
import dogGameThree from './dogGameThree';

export default combineReducers({
  dogBreed,
  dogImages,
  dogGameOne,
  dogGameTwo,
  dogGameThree
});

