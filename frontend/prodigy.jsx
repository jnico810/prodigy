import React from 'react';
import ReactDOM from 'react-dom';
import * as SESSION_UTILS from './util/session_api_util';
import * as ACTIONS from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Prodigyds</h1>, root);
    window.login = ACTIONS.login;
    window.signup = ACTIONS.signup;
    window.logout = ACTIONS.logout;
    window.success = (data) => console.log(data);
    window.user1 = {user:{ username:'john3', email:'john3', score:100, password:'starwars'}};
    window.store = configureStore();
});
