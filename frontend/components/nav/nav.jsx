import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav-newsong">
        <Link to="/new_track">ADD SONG</Link>
      </div>
    </nav>
  );
};

export default Nav;
