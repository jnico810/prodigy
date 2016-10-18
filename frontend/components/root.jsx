import { Provider } from 'react-redux';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './home/home';
import TrackFormContainer from './tracks/track_form_container'
import TrackShowContainer from './tracks/track_show_container'
import { requestAllTracks, requestTrack } from '../actions/track_actions'
import { browserHistory } from 'react-router'
const Root = ({ store }) => {

  const _redirectIfNotLogginIn = (nextState, replace) => {

  if (!store.getState().session.currentUser){
    replace('/');
  }
  };

  const _requestAllTracks = (nextState, replace) => {
    store.dispatch(requestAllTracks());
  };

  const _requestTrack = (nextState, replace) => {
    store.dispatch(requestTrack(nextState.params.track_id))
  };


  window.store = store;
  return (
    <Provider store={store}>
      <Router history= { browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } onEnter= { _requestAllTracks }/>
          <Route path="/new_track" component={ TrackFormContainer } onEnter= {_redirectIfNotLogginIn}/>
          <Route path="/tracks/:track_id" component={ TrackShowContainer } onEnter= {_requestTrack}/>
        </Route>
    </Router>
  </Provider>
  )
};


export default Root;
