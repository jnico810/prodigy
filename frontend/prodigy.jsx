import React from 'react';
import ReactDOM from 'react-dom';
import * as SESSION_UTILS from './util/session_api_util';
import * as ACTIONS from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
      const initialState = {
        session: {
          currentUser: window.currentUser
        }
      };
      store = configureStore(initialState);
    } else {
      store = configureStore();
    }


    ReactDOM.render(<Root store={ store }></Root>, root);

    window.user1 = {user:{ username:'john3', email:'john3', score:100, password:'starwars'}};

});
