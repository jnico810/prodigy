import React from 'react';
import ReactDOM from 'react-dom';
import * as SESSION_UTILS from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Prodigyds</h1>, root);
    window.login = SESSION_UTILS.login;
    window.signup = SESSION_UTILS.signup;
    window.logout = SESSION_UTILS.logout;
    window.success = (data) => console.log(data);
    window.user1 = {user:{ username:'john2', email:'john2', score:100, password:'starwars'}};
    window.store = configureStore();
});
