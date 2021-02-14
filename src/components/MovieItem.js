import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { ImStarEmpty, ImStarFull, ImPlus, ImMinus } from 'react-icons/im';

import { setFavoriteMovie, setWatchList, getMovieTrailer } from '../actions/moviesActions';

import { URL_IMG } from '../utils/Api';

const MovieItem = (item) => {
  // const movies = useSelector((state) => state.movies);
  const [videoURL, setVideoURL] = useState(undefined);

  const dispatch = useDispatch();
  const onFavoriteHandler = () => {
    dispatch(setFavoriteMovie(item.id, !item.isFavorite));
  };

  const onWatchListHandler = () => {
    dispatch(setWatchList(item.id, !item.isWatchList));
  };

  // useLayoutEffect(() => {
  //   dispatch(getMovieImages(item.id))
  //     .then((data) => {
  //       console.log(data);
  //       setImages(data);
  //   });
  // }, []);

  // const renderImages = () => images.map((img) => (<img key={item.id} alt='' src={`${URL_IMG}/${img.file_path}`} className='rounded my-2 py-1' />));

  const renderPoster = item.poster_path
    ? `${URL_IMG}${item.poster_path}`
    : 'https://via.placeholder.com/300x450/F8F8FF/DCDCDC?text=No+Image';

  useEffect(() => {
    dispatch(getMovieTrailer(item.id))
      .then((data) => {
        // console.log(data);
        setVideoURL(data[0]?.key && `http://www.youtube.com/embed/${data[0].key}`);
      });
  }, []);

  return (
    <div className='flex-1 flex-col bg-gray-100'>
      {/* Movie Content */}
      <div className='flex-1 flex-col sm:flex-row h-auto m-4 rounded bg-gradient-to-r from-blue-800 via-blue-800 to-blue-900'>
        {/* Title / Release Date */}
        <div className='flex flex-col divide-y-2 divide-yellow-500'>
          <div className='justify-center items-center text-center py-4 mx-2 h-20'>
            <span className='text-gray-200 items-center text-base text-center'>{item.title}</span>
          </div>
          <div className='text-yellow-500 text-center text-sm'>
            <span className='font-bold'>Release Date</span>
            <span className='mx-2'>{moment(item.release_date).format('DD/MM/YYYY')}</span>
          </div>
        </div>

        <div className='text-blue-400 mx-4 py-2'>
          <div className='flex justify-center py-2'>
            {/* Favorite Button */}
            <button
              className='flex flex-row w-36 items-center justify-center border border-indigo-500 bg-indigo-700 text-white rounded-md py-2 px-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
              type='button'
              onClick={onFavoriteHandler}>
              { item.isFavorite ? (<ImStarFull />) : (<ImStarEmpty />)}
              <span className='text-sm ml-1'>Save as Favorite</span>
            </button>
            {/* WatchList Button */}
            <button
              className='flex flex-row w-36 items-center justify-center border border-indigo-500 bg-indigo-500 ml-4 text-white rounded-md py-2 px-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
              type='button'
              onClick={onWatchListHandler}>
              { item.isWatchList ? (<ImMinus />) : (<ImPlus />)}
              {/* <span className='text-sm ml-1'>{`${item.isWatchList ? 'Remove from' : 'Add to'} to Watch List`}</span> */}
              <span className='text-sm ml-1'>
                {`${item.isWatchList ? 'From' : 'To'} Watch List`}
              </span>
            </button>
          </div>
          <div className='flex-1 flex-col justify-start'>
            {/* Movie Poster */}
            <div className='flex bg-gray-900 bg-opacity-30 rounded justify-center h-72'>
              <img alt='' src={renderPoster} className='rounded text-center p-4' />
            </div>
            {/* Overview */}
            <p className='flex-1 text-gray-200 text-sm my-2 h-72 text-justify'>{item.overview || 'No overview added...=('}</p>
          </div>
          {/* <div className='flex flex-row justify-between'>
            { renderImages() }
          </div> */}
        </div>
        {/* Voting */}
        <div className='flex flex-row text-blue-400 mx-4 border-t-2 border-yellow-600 py-4'>
          <h4 className='text-blue-100'>Voting:</h4>
          <span className='text-blue-200 ml-2'>{item.vote_average}</span>
        </div>
        <div className='flex flex-col justify-center items-center pb-4'>
          <h3 className='text-gray-200 text-sm py-2'>{videoURL ? 'Watch the Trailer!' : 'No trailer...'}</h3>
          <iframe allowFullScreen='allowfullscreen' width='320' height='200' id='ytplayer' type='text/html' src={videoURL} frameBorder='0' />
        </div>
      </div>
      <div />
    </div>
  );
};

export default MovieItem;
