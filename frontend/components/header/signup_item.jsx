const SignUp = ({ logout, currentUser}) => {

  const handleLogOut = () => logout();

  if (currentUser){
    return(
      <div>
        <p>search_bar</p>
        <h1>PRODIGY</h1>
        Welcome {currentUser.username} to Prodigy!
        <button onClick={ handleLogOut }>Log out</button>
      </div>
    );
  } else {
    return(
      <div>
        <p id="searchBar">search_bar</p>
        <h1>PRODIGY</h1>
        <ul>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    );
  }
};


export default Header;
