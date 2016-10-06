import React from 'react';
import HeaderContainer from './header/header_container';
import Nav from './nav/nav';


const App = ({ children }) => {
  return (
    <main>
      <HeaderContainer/>
      <Nav/>
      { children }
    </main>);
}


export default App;
