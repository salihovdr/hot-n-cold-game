import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import { Provider } from 'react-redux';
import store from './store';
import Game from './components/game';
//import { guessesAction, feedbackAction } from './actions';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

//store.dispatch(guessesAction(30));
// store.dispatch(guessesAction(25));
// store.dispatch(feedbackAction('This is my dummy feedback!'));

// console.log(store.getState());
