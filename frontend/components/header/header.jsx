import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import ModalStyle from './modal_style';
import Nav from '../nav/nav';


class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = { modalOpen: false, formType:"", query:'', inputClick: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  clearSearch (){
    this.setState({query:'', inputClicked:false});
  }

  closeModal(){
    this.setState({ modalOpen: false, formType: "" });
  }
  openModal(type){
    this.setState({ modalOpen: true, formType: type });
  }

  handleSearchClick(e){
    // this.setState({inputClicked:true});
  }

  handleLogOut() {
    this.props.logout();
    this.setState({ modalOpen: false, formType: "" });
  }

  handleLogoClick() {
    hashHistory.push("/");
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({query:e.currentTarget.value});
    const query = e.currentTarget.value ;
    if (query.length > 0){
      this.props.requestSearch(query);
    }
  }

  handleGuestLogin(e){
    e.preventDefault();
    const user = {
      username:'mozart',
      password:'starwars'
    };
    this.props.login({user});
  }

  render() {
    let rightOfHeader;
    if (this.props.currentUser){
      rightOfHeader = (
        <ul className="header-list cf">
          <li className="header-welcome">Welcome <strong>{this.props.currentUser.username}! IQ:{ this.props.currentUser.score}</strong></li>
          <li><a className="header-logout login" onClick={ this.handleLogOut }>LOG OUT</a></li>
        </ul>);
    } else {
      rightOfHeader= (
        <div>
        <ul className="header-list cf">
          <li><a className="login" onClick={ this.openModal.bind(this, "/signup") }>SIGN UP</a></li>
          <li><a className="login" onClick={ this.openModal.bind(this, "/login") }>LOGIN </a></li>
          <li><a className="login" onClick={ this.handleGuestLogin}>GUEST LOGIN </a></li>
        </ul>
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={ ModalStyle }>
          <SessionFormContainer
            location={ { pathname:this.state.formType} }
            openModal={ this.openModal }
            closeModal={ this.closeModal }
            />
        </Modal>
        </div>
      );
    }
    let results = [];
    this.props.search.forEach((result) => {
      const url = `/tracks/${result.id}`;
      results.push(
        <Link to={ url } onClick={this.clearSearch}>
          <li>{result.title} <small>by {result.artist} </small></li>
        </Link>
    );
    });
    let searchUl = (<div className="empty-div"></div>);
    let inputStyle = "header-search";
    if (this.state.inputClicked){
      inputStyle = "header-search-big";
    }

    if (results.length > 0 && this.state.query.length > 0){
      searchUl = (<div className='search-results'>
      <ul>
        {results}
      </ul>
    </div>);
    }
    return(
      <header>
        <div className="header cf">
          <input onClick= {this.handleSearchClick} onChange= { this.handleSearch } className={inputStyle} value={this.state.query}type="text" placeholder="Search lyrics & more!">
          </input>
          {searchUl}
          <div className="header-logo-container">
            <a className="header-logo" onClick = { this.handleLogoClick }>PRODIGY</a>
          </div>
          { rightOfHeader }
        </div>
        <Nav openModal={ this.openModal.bind(this, "/login") } currentUser= { this.props.currentUser }/>
      </header>
    );
  }
}

// <a className="header-left" href="https://github.com/jnico810">GITHUB </a>
// <li><Link to="/signup">SIGN UP</Link></li>
// <li><Link to="/login">LOGIN</Link></li>
export default Header;
