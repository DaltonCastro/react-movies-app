import React from 'react';
import { render, fireEvent, screen, cleanup, waitFor } from './test-utils'
import userEvent from '@testing-library/user-event'
import Header from '../components/Header';
import MoviesWatchList from '../components/MoviesWatchList';
import MovieSearch from '../components/MovieSearch';
import MoviesList from '../components/MoviesList';
import MovieItem from '../components/MovieItem';
import { act } from '@testing-library/react';

afterEach(cleanup)

describe('Should Main Components Exist', () => {
  it('Header', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header')).toBeInTheDocument();
  })

  it('Watch List', () => {
    const { getByTestId } = render(<MoviesWatchList />);
    expect(getByTestId('watch-list')).toBeInTheDocument();
  })

  it('Seacrh bar', () => {
    const { getByTestId } = render(<MovieSearch />);
    expect(getByTestId('search-bar')).toBeInTheDocument();
  })

  it('Movies List', () => {
    const { getByTestId } = render(<MoviesList />);
    expect(getByTestId('movies-list')).toBeInTheDocument();
  })
})


describe('SearchBar on change action',  () => {
  
  test('Should be enable for typing' , () => {
    const { getByTestId } = render(<MovieSearch />);
    const searchInput = getByTestId('search-bar');
    expect(searchInput).not.toBeDisabled();
  })

  test('should dispatch a action for fetching results' , () => {
    const { getByPlaceholderText } = render(<MovieSearch />)
    const searchInput = getByPlaceholderText('Find your movie :)')
    const text = 'GodFather';
    userEvent.type(searchInput, text);

    expect(searchInput.value).toEqual(text);
  })
})
 

describe('Movies WatchList', () => {
  test('Add to favorites - Star Visible', () => {
    const { getByTestId } = render(<MovieItem />);
    const buttonStarFav = getByTestId('movie-add-fav');
    expect(buttonStarFav).toBeVisible();
})

  test('Added to favorites - Action', async() => {
      const item = { 
        isFavorite: true
      }
      const { getByTestId } = render(<MovieItem {...item} />);
      expect(getByTestId('star-full')).toBeVisible();
    })

  test('Removed from favorites', () => {
      const item = { 
        isFavorite: false
      }
      const { getByTestId } = render(<MovieItem {...item} />);
      expect(getByTestId('star-empty')).toBeVisible();
  })

  test('Removed from WatchList', () => {
    const item = { 
      isWatchList: false
    }
    const { getByTestId } = render(<MovieItem {...item} />);
    expect(getByTestId('plus-watch')).toBeVisible();
  })

  test('Added from WatchList', () => {
    const item = { 
      isWatchList: true
    }
    const { getByTestId } = render(<MovieItem {...item} />);
    expect(getByTestId('minus-watch')).toBeVisible();
  })
})


describe('Movies List', () => {
  test('Fetch Movies on Load', async () => {
    const { getByTestId } = render(<MoviesList />);
    const moviesList = getByTestId('movies-list');

    waitFor(async () => {
      await act(expect(getByTestId('movie-item')).toBeInTheDocument());
    });
  })

})


