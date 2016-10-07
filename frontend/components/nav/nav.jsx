import React from 'react';
import { Link } from 'react-router';

const Nav = ({ openModal }) => {

  return (
    <nav className="main-nav">
      <div className="main-nav-newsong" onClick={openModal.bind(this, "/login")}>
        <Link to="/new_track">ADD SONG</Link>
      </div>
    </nav>
  );
};

export default Nav;
