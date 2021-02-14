import Axios from 'axios';
import _ from 'lodash';
import * as Types from '../helpers/types';
import {
  API, API_KEY, ENDPOINTS, SESSION_ID, ACCOUNT_ID
} from '../utils/Api';

export const createRequestToken = () => async (dispatch) => {
  Axios.get(`${API}/${ENDPOINTS.createToken}?${API_KEY}`)
    .then(({ data }) => {
      localStorage.setItem('token', data?.request_token);

      dispatch({
        type: Types.TOKEN,
        payload: data?.request_token
      });
    })
    .catch((e) => {
      dispatch({ type: Types.TOKEN_ERROR, payload: e });
    });
};

export const createSession = () => (dispatch) => {
  const request_token = localStorage.getItem('token');

  Axios.post(`${API}/${ENDPOINTS.createSession}?${API_KEY}&request_token=${request_token}`)
    .then(({ data }) => {
      localStorage.setItem('sessionId', data.session_id);

      dispatch({
        type: Types.CREATE_SESSION,
        payload: data.session_id
      });
    })
    .catch((e) => {
      console.log({ ...e });
      dispatch({ type: Types.CREATE_SESSION_ERROR, payload: e });
    });
};

export const searchMovies = (term = 'Bob Esponja') => async (dispatch) => {
  Axios.get(`${API}/${ENDPOINTS.searchMovies}?${API_KEY}&query=${term}`)
    .then(({ data }) => {
      dispatch({
        type: Types.SEARCH_MOVIES,
        payload: _.orderBy(data?.results, 'release_date', 'desc')
      });
    })
    .catch((e) => {
      dispatch({ type: Types.SEARCH_MOVIES_ERROR, payload: e });
    });
};

export const setFavoriteMovie = (id, favorite) => (dispatch) => {
  const data = {
    media_type: 'movie',
    media_id: id,
    favorite
  };

  const config = {
    'Content-Type': 'application/json;charset=utf-8'
  };
  console.log(ACCOUNT_ID);
  Axios.post(`${API}/account/10104906/favorite?${API_KEY}&session_id=${SESSION_ID}`, data, config)
    .then(({ data: dt }) => {
      dispatch({
        type: Types.SET_FAVORITE,
        payload: { favorite, id }
      });
    })
    .catch((e) => {
      dispatch({ type: Types.SET_FAVORITE_ERROR, payload: e });
    });
};

export const getAccountDetails = () => {
  // Axios.get(`${API}/account?${API_KEY}&session_id=${SESSION_ID}`)
  //   .then((teste)=> {
  //     console.log(teste)
  //   })
};

export const getFavoriteMovies = () => async (dispatch) => {
  Axios.get(`${API}/account/${ACCOUNT_ID}/favorite/movies?${API_KEY}&session_id=${SESSION_ID}`)
    .then(({ data }) => {
      dispatch({
        type: Types.FETCH_FAVORITES,
        payload: data.results
      });
    })
    .catch((e) => {
      dispatch({ type: Types.FETCH_FAVORITES_ERROR, payload: e });
    });
};

export const setWatchList = (id, watchlist) => (dispatch) => {
  const data = {
    media_type: 'movie',
    media_id: id,
    watchlist
  };

  const config = {
    'Content-Type': 'application/json;charset=utf-8'
  };

  Axios.post(`${API}/account/${ACCOUNT_ID}/watchlist?${API_KEY}&session_id=${SESSION_ID}`, data, config)
    .then(({ data: dt }) => {
      dispatch({
        type: Types.SET_WATCH_LIST,
        payload: { watchlist, id }
      });
    })
    .catch((e) => {
      dispatch({ type: Types.SET_WATCH_LIST_ERROR, payload: e });
    });
};

export const getWatchList = () => async (dispatch) => {
  Axios.get(`${API}/account/${ACCOUNT_ID}/watchlist/movies?${API_KEY}&session_id=${SESSION_ID}`)
    .then(({ data }) => {
      dispatch({
        type: Types.FETCH_WATCHLIST,
        payload: data.results
      });
    })
    .catch((e) => {
      dispatch({ type: Types.FETCH_WATCHLIST_ERROR, payload: e });
    });
};

// export const getMovieImages = (id) => async (dispatch) => {
//   return Axios.get(`${API}/movie/${id}/images?${API_KEY}&session_id=${SESSION_ID}`)
//     .then(({ data }) => {
//       return data.posters;
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };

export const getMovieTrailer = (movieId) => () => Axios.get(`${API}/${ENDPOINTS.movie}/${movieId}/videos?${API_KEY}`)
  .then(({ data }) => {
    return data.results;
  })
  .catch((e) => {
    console.log(e);
  });
