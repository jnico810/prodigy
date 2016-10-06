import { Provider } from 'react-redux';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './home/home';
import TrackFormContainer from './tracks/track_form_container'
import { requestAllTracks } from '../actions/track_actions'

const Root = ({ store }) => {

  const _redirectIfNotLogginIn = (nextState, replace) => {
  // debugger
  if (!store.getState().session.currentUser){
    replace('/');
  }
  };

  const _requestAllTracks = (nextState, replace) => {
    store.dispatch(requestAllTracks());
  };

  return (
    <Provider store={store}>
      <Router history= { hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } onEnter= { _requestAllTracks }/>
          <Route path="/new_track" component={ TrackFormContainer } onEnter= {_redirectIfNotLogginIn}/>
        </Route>
    </Router>
  </Provider>
  )
};


export default Root;
