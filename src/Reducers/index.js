import { combineReducers } from 'redux';

import populationReducer from './populationReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  population: populationReducer,
  error: errorReducer
});