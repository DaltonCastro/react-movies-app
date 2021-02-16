import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesWatchList from './MoviesWatchList';
import MoviesList from './MoviesList';
import MovieSearch from './MovieSearch';
import Header from './Header';
import { getWatchList } from '../actions/moviesActions';

const MoviesContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  // const { token, session } = useSelector((state) => state.movies);
  // // console.log('token: ', token);
  // const allowedToken = '2c25803bd635e8651efb99c64789d0b9a7f1f951';
  // const allowedSession = '95a4b57cf98c2ca9e2868a4536c04a0f58586e96';
  
  // useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     dispatch(createRequestToken());
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!localStorage.getItem('sessionId')) {
  //     dispatch(createSession());
  //   }
  // }, []);

  useEffect(() => {
    dispatch(getWatchList());
  }, []);

  return (
    <div className='flex-1 flex-row h-full w-full md:mx-auto bg-gray-600'>
      <Header />
      <div className='flex flex-col'>
        <MoviesWatchList />
        <MovieSearch />
        <MoviesList />
      </div>
    </div>
  );
};

export default MoviesContainer;
