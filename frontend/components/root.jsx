import { Provider } from 'react-redux';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container'
import HeaderContainer from './header/header_container';


const Root = ({ store }) => {

  const _redirectIfLogginIn = (nextState, replace) => {
    if (store.getState().session.currentUser){
      replace('/');
    }
  };
  return (
    <Provider store={store}>
      <Router history= { hashHistory }>
        <Route path="/" component={ App }>
          <Route
            path="login"
            component={SessionFormContainer}
            onEnter= { _redirectIfLogginIn }
            />
          <Route
            path="signup"
            component={SessionFormContainer}
            onEnter= { _redirectIfLogginIn }
            />
      </Route>
    </Router>
  </Provider>
  )
};



export default Root;
