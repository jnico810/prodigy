import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import ModalStyle from './modal_style';

class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = { modalOpen: false, formType:""};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
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

  render() {
    if (this.props.currentUser){
      return(
        <header className="header cf">
          <input onClick= { this.clearSearch } className="header-search" type="text" defaultValue="Search lyrics & more!"></input>
          <div className="header-logo-container">
            <a className="header-logo" onClick = { this.handleLogoClick }>PRODIGY</a>
          </div>

          <ul className="header-list cf">
            <li className="header-welcome">Welcome <strong>{this.props.currentUser.username}</strong>!</li>
            <li><a className="header-logout" onClick={ this.handleLogOut }>Log out</a></li>
          </ul>
        </header>
      );
    } else {
      return(
        <header className="header cf">
          <input onClick= { this.clearSearch } className="header-search" type="text" defaultValue="Search lyrics & more!"></input>
          <div className="header-logo-container">
            <a className="header-logo" onClick = { this.handleLogoClick }>PRODIGY</a>
          </div>
          <ul className="header-list cf">
            <li><a onClick={ this.openModal.bind(this, "/signup") }>SIGN UP</a></li>
            <li><a onClick={ this.openModal.bind(this, "/login") }>LOGIN </a></li>
          </ul>
          <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={ ModalStyle }>
            <SessionFormContainer
              location={ { pathname:this.state.formType} }
              openModal={ this.openModal }
              closeModal={ this.closeModal }
              />
            <button onClick= {this.closeModal}></button>
          </Modal>
        </header>
      );
    }
  }
}

// <li><Link to="/signup">SIGN UP</Link></li>
// <li><Link to="/login">LOGIN</Link></li>
export default Header;
