import React from 'react';
import { useDispatch } from 'react-redux';
import { ImCross, ImStarFull, ImStarEmpty } from 'react-icons/im';
import { setWatchList, setFavoriteMovie } from '../actions/moviesActions';

import { URL_IMG } from '../utils/Api';

const WatchListItem = (item) => {
  const dispatch = useDispatch();

  const onFavoriteHandler = () => {
    console.log(item);
    dispatch(setFavoriteMovie(item.id, !item.isFavorite));
  };

  const onWatchListHandler = () => {
    dispatch(setWatchList(item.id, !item.isWatchList));
  };

  const renderPoster = item.poster_path
    ? `${URL_IMG}${item.poster_path}`
    : 'https://via.placeholder.com/192x192/F8F8FF/DCDCDC?text=No+Image';
    
  const starStyle = item.isFavorite ? { color: '#fdec6a' } : { color: '#fbdf6c' };

  return (
    <div className='rounded bg-blue-900 mx-2 bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${renderPoster})` }}>
      {/* Title / Release Date */}
      <div className='flex flex-col w-48 h-48 justify-between'>
        <div className='flex justify-between m-2'>
          <button type='button' onClick={onFavoriteHandler}>
            { item.isFavorite ? (<ImStarFull style={starStyle} />) : (<ImStarEmpty style={starStyle} />) }
          </button>
          <button type='button' onClick={onWatchListHandler}>
            <ImCross style={{ color: '#f08080' }}  />
          </button>
        </div>
        <div className='flex items-center justify-center h-20 py-4 bg-gray-500 bg-opacity-80'>
          <span className='text-gray-200 text-sm text-center font-medium mx-2'>{item.title}</span>
        </div>

      </div>
    </div>

  );
};

export default WatchListItem;
