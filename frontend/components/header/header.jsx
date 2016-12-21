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

  handleLogOut() {
    this.props.logout();
    this.setState({ modalOpen: false, formType: "" });
  }

  handleUserClick(){
    hashHistory.replace("/users/");
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
          <li id="header-welcome">Welcome <Link to={"/users/" + this.props.currentUser.id}> <strong>{this.props.currentUser.username}! </strong> </Link> IQ:{ this.props.currentUser.score}</li>
          <li><a className="logout" onClick={ this.handleLogOut}>LOGOUT </a></li>
        </ul>);
    } else {
      rightOfHeader= (
        <div>
        <ul className="header-list cf">
          <li><a className="login" onClick={ this.openModal.bind(this, "/signup") }>SIGN UP </a></li>
          <li><a className="login" onClick={ this.openModal.bind(this, "/login") }>LOGIN  </a></li>
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
        <Link to={ url } onClick={this.clearSearch} key={result.id}>
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
          <input onChange= { this.handleSearch } className={inputStyle} value={this.state.query}type="text" placeholder="Search lyrics & more!">
          </input>
          {searchUl}
          <div className="header-logo-container">
            <Link to="/">
              <div className="header-logo">
                PRODIGY
              </div>
            </Link>
          </div>
          { rightOfHeader }
        </div>
        <Nav openModal={ this.openModal.bind(this, "/login") } currentUser= { this.props.currentUser }/>
      </header>
    );
  }
}
export default Header;
