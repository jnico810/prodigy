import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import ModalStyle from './modal_style';
import Nav from '../nav/nav';


class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = { modalOpen: false, formType:""};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
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

  handleLogoClick() {
    hashHistory.push("/");
  }

  clearSearch(e) {
    e.preventDefault();
    e.currentTarget.value = "";
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
          <li><a className="header-logout login" onClick={ this.handleLogOut }>Log out</a></li>
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
    return(
      <header>
        <div className="header cf">
          <input onClick= { this.clearSearch } className="header-search" type="text" defaultValue="Search lyrics & more!"></input>
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

// <li><Link to="/signup">SIGN UP</Link></li>
// <li><Link to="/login">LOGIN</Link></li>
export default Header;
