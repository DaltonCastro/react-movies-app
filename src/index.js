import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

/*
  Template / Components
 */
import './assets/styles/styles.css';

import App from './components/pages/App';
import MoviesContainer from './components/MoviesContainer';

/*
  Images for webpack loading
 */

ReactDOM.render(
  <Root>
    <App>
      <MoviesContainer />
    </App>
  </Root>,
  document.querySelector('#app')
);
