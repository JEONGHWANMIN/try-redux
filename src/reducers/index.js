import { combineReducers } from 'redux';
import countReducer from './CounterReducer';

export const rootReducer = combineReducers({
  countReducer: countReducer,
});
