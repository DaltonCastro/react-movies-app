import { combineReducers } from 'redux';
import movies from './moviesReducer';

const appReducer = combineReducers({
  movies,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
