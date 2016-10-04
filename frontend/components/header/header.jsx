import React from 'react';
import { Link } from 'react-router'

const Header = ({ logout, currentUser}) => {

  const handleLogOut = () => logout();

  if (currentUser){
    return(
      <header className="header">
        <nav className= "header-nav cf">
          <p className="header-search">search_bar</p>
          <a className="header-logo">PRODIGY</a>
          Welcome {currentUser.username} to Prodigy!
          <button onClick={ handleLogOut }>Log out</button>
        </nav>
      </header>
    );
  } else {
    return(
      <header className="header">
        <nav className= "header-nav cf">
          <p className="header-search">search_bar</p>
          <a className="header-logo">PRODIGY</a>
          <ul className="header-list cf">
            <li><Link to="/signup">SIGN UP</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
};


export default Header;
