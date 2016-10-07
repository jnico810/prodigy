import React from 'react';
import HeaderContainer from './header/header_container';


const App = ({ children }) => {
  return (
    <main>
      <HeaderContainer/>
      { children }
    </main>);
}


export default App;
