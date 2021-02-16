import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WatchListItem from './WatchListItem';
import { getWatchList } from '../actions/moviesActions';

const MoviesWatchList = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getWatchList());
  }, []);

  const renderWatchListItem = () => {
    const { watchList } = movies;
 
    return watchList && watchList.map((item) => {
      const isFavorite = !!(movies.favorites && movies.favorites.find((el) => el.id === item.id));
      const isWatchList = !!(movies.watchList && movies.watchList.find((el) => el.id === item.id));
      return (<WatchListItem isWatchList={isWatchList} isFavorite={isFavorite} key={item.id} {...item} />);
    });
  };

  return (
    <div data-testid='watch-list' className='py-4 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600'>
      <h2 className='text-gray-200 text-sm md:text-lg text-left ml-6 font-medium py-2'>My Watch List</h2>
      <div className='flex flex-row overflow-x-auto mx-4'>
        {renderWatchListItem()}
      </div>
    </div>
  );
};

export default MoviesWatchList;
