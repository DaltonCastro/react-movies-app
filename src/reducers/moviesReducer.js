import _ from 'lodash';
import {
  SEARCH_MOVIES,
  SEARCH_MOVIES_ERROR,
  GET_MOVIE_TRAILER,
  GET_MOVIE_TRAILER_ERROR,
  CREATE_SESSION,
  CREATE_SESSION_ERROR,
  TOKEN_ERROR,
  TOKEN,
  FETCH_FAVORITES,
  FETCH_FAVORITES_ERROR,
  SET_FAVORITE,
  SET_FAVORITE_ERROR,
  SET_WATCH_LIST,
  SET_WATCH_LIST_ERROR,
  FETCH_WATCHLIST,
  FETCH_WATCHLIST_ERROR,
  FETCH_MOVIE_IMG,
  FETCH_MOVIE_IMG_ERROR
} from '../helpers/types';

import { getPieceOfState } from './utils/stateUtils';
import { MOVIES } from './utils/initialStates';

export default function (state = MOVIES, action) {
  const actions = {
    [SEARCH_MOVIES]: () => getPieceOfState('moviesList', action, state),
    [SEARCH_MOVIES_ERROR]: () => getPieceOfState('moviesListError', action, state),
    [GET_MOVIE_TRAILER]: () => getPieceOfState('movieTrailer', action, state),
    [GET_MOVIE_TRAILER_ERROR]: () => getPieceOfState('movieTrailerError', action, state),
    [CREATE_SESSION]: () => getPieceOfState('session', action, state),
    [CREATE_SESSION_ERROR]: () => getPieceOfState('sessionError', action, state),
    [TOKEN]: () => getPieceOfState('token', action, state),
    [TOKEN_ERROR]: () => getPieceOfState('tokenError', action, state),
    [FETCH_FAVORITES]: () => getPieceOfState('favorites', action, state),
    [FETCH_FAVORITES_ERROR]: () => getPieceOfState('favoritesError', action, state),
    [SET_FAVORITE]: () => getPieceOfState('isFavorite', action, state),
    [SET_FAVORITE_ERROR]: () => getPieceOfState('isFavorite', action, state),
    [FETCH_WATCHLIST]: () => getPieceOfState('watchList', action, state),
    [FETCH_WATCHLIST_ERROR]: () => getPieceOfState('watchListError', action, state),
    [SET_WATCH_LIST]: () => getPieceOfState('isWatchList', action, state),
    [SET_WATCH_LIST_ERROR]: () => getPieceOfState('isWatchListError', action, state),
  };

  const fn = _.get(actions, action.type);
  return (_.isFunction(fn) && fn()) || state;
}
