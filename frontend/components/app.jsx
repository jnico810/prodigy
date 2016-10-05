import React from 'react';
import HeaderContainer from './header/header_container';
import Nav from './nav/nav';


const App = ({ children }) => {
  return (<div>
    <HeaderContainer/>
    <Nav/>
    { children }
  </div>);
}


export default App;
