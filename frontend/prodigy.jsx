import React from 'react';
import ReactDOM from 'react-dom';
import * as TRACK_API from './util/track_api_util';
import * as TRACK_ACTIONS from './actions/track_actions';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

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
    window.newTrack = { track:{title: "NEW",
    description:"DECRIPTION",
    lyrics:"LYRICS",
    artist_id: 5,
    author_id: 4}};
    window.createTrack = TRACK_ACTIONS.createTrack;
    window.store = store;
    Modal.setAppElement(document.body);
    ReactDOM.render(<Root store={ store }></Root>, root);
});
