import { Provider } from 'react-redux';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import TrackFormContainer from './tracks/track_form_container'

const Root = ({ store }) => {

  const _redirectIfNotLogginIn = (nextState, replace) => {
  // debugger
  if (!store.getState().session.currentUser){
    replace('/');
  }
};

  return (
    <Provider store={store}>
      <Router history= { hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/new_track" component={ TrackFormContainer } onEnter= {_redirectIfNotLogginIn}/>
        </Route>
    </Router>
  </Provider>
  )
};


export default Root;
