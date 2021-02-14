import React from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../actions/moviesActions';

const MovieSearch = () => {
  const dispatch = useDispatch();

  const onChangelHandler = (event) => {
    if (event.target.value.length > 3) {
      dispatch(searchMovies(event.target.value));
    }
  };

  return (
    <div className='flex flex-row items-center justify-center py-5'>
      {/* <h3 className='text-xl mr-2'>Find a movie: </h3> */}
      <input autoCorrect='off'
        placeholder='Find your movie :)'
        className='border text-center rounded-lg text-grey-darkest placeholder-gray-400 leading-normal w-64 p-4'
        onChange={onChangelHandler}
      />
    </div>
  );
};

export default MovieSearch;
