import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieItem from './MovieItem';
import MovieSearch from './MovieSearch';
import { getFavoriteMovies, searchMovies, getWatchList } from '../actions/moviesActions';

const MoviesList = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(searchMovies());
    dispatch(getFavoriteMovies());
    dispatch(getWatchList());
  }, []);

  useEffect(() => {
    dispatch(getFavoriteMovies());
  }, [movies.isFavorite]);

  useEffect(() => {
    dispatch(getWatchList());
  }, [movies.isWatchList]);

  const renderMovies = () => {
    const { moviesList } = movies;
    return moviesList.map((item) => {
      const isFavorite = !!(movies.favorites && movies.favorites.find((el) => el.id === item.id));
      const isWatchList = !!(movies.watchList && movies.watchList.find((el) => el.id === item.id));
      return (<MovieItem isWatchList={isWatchList} isFavorite={isFavorite} key={item.id} {...item} />);
    });
  };

  return (
    <div data-testid='movies-list' className='flex flex-row flex-wrap'>
      { renderMovies() }
    </div>
  );
};

export default MoviesList;
