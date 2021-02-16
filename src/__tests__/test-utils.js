// test-utils.js
import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render as rtlRender } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk';

import initialState from '../reducers/utils/initialStates';

// Import your own reducer
import reducers from '../reducers';

// ReduxThunk
const middlewares = [];
middlewares.push(reduxThunk);

const render = (
    ui,
    {
        initialState,
        store = createStore(reducers,
            {},
            applyMiddleware(
              ...middlewares
            )),
        ...renderOptions
    } = {},
    ) => {
    const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>
    
    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
    }

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }