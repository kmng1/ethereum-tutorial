import React from 'react';
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB24sSvUB_J6f9TkqIfCkhBagYqlxjGKlk';

YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
);
};

ReactDOM.render(
    <App />
  , document.querySelector('.container'));

/*
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
*/
