import { Provider } from 'react-redux';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './home/home';
import TrackFormContainer from './tracks/form/track_form_container'
import TrackShowContainer from './tracks/show/track_show_container'
import UserShowContainer from './user_page/user_show_container.js'
import { requestAllTracks, requestTrack } from '../actions/track_actions'

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
  return (
    <Provider store={store}>
      <Router history= { hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } onEnter= { _requestAllTracks }/>
          <Route path="/new_track" component={ TrackFormContainer } onEnter= {_redirectIfNotLogginIn}/>
          <Route path="/tracks/:track_id" component={ TrackShowContainer } onEnter= {_requestTrack}/>
          <Route path="/users/:user_id" component={ UserShowContainer }/>
        </Route>
    </Router>
  </Provider>
  )
};


export default Root;
