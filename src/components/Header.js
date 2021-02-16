import React from 'react';
import { RiMovieFill } from 'react-icons/ri';

const Header = () => {
  return (
    <div data-testid='header' className='flex flex-row justify-center items-center py-3 bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500'>
      <RiMovieFill style={{ color: 'white' }} />
      <span className='text-white text-sm md:text-lg text-center font-medium ml-2'>THE FAVORITE MOVIES</span>
    </div> 
    
)
}

export default Header;