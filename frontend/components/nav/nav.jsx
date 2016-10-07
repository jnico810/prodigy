import React from 'react';
import { Link } from 'react-router';

const Nav = () => {

  const _update_css = ()=> {
  };

  return (
    <nav className="main-nav">
      <div className="main-nav-newsong">
        <Link onClick= {_update_css}to="/new_track">ADD SONG</Link>
      </div>
    </nav>
  );
};

export default Nav;
