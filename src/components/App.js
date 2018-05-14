import React, { Component } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import reducer from '../reducers';
import Content from '../containers/Content';

export const Container = styled.div`
    max-width: 1200px;
    padding: 0 15px;
    width: 100%;
`;

export const FullHeightWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    @media (max-width: 767px) {
      padding: 30px 0;
    }
`;

export const MainTitle = styled.h2`
    margin: 0 0 30px 0;
`;

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducer,
    router: routerReducer
  }),
  applyMiddleware(middleware),
  applyMiddleware(thunk),
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Content />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
