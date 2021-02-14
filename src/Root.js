import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import { DEVELOPMENT } from './utils/AppContants';

export default ({ children }) => {
  const middlewares = [];
  middlewares.push(reduxThunk);

  if (process.env.NODE_ENV === DEVELOPMENT) {
    middlewares.push(logger);
  }

  const store = createStore(
    reducers,
    {},
    applyMiddleware(
      ...middlewares
    )
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
