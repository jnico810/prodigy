import React from 'react';
import { Link } from 'react-router';
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
            <a className="header-logo">PRODIGY</a>
          </div>

          <ul className="header-list cf">
            <li className="header-welcome">Welcome {this.props.currentUser.username} to Prodigy!</li>
            <li><a onClick={ this.handleLogOut }>Log out</a></li>
          </ul>
        </header>
      );
    } else {
      return(
        <header className="header cf">
          <input onClick= { this.clearSearch } className="header-search" type="text" defaultValue="Search lyrics & more!"></input>
          <div className="header-logo-container">
            <a className="header-logo">PRODIGY</a>
          </div>
          <ul className="header-list cf">
            <li><a onClick={ this.openModal.bind(this, "/signup") }>SIGN UP</a></li>
            <li><a onClick={ this.openModal.bind(this, "/login") }>LOGIN </a></li>
          </ul>
          <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={ ModalStyle }>
            <SessionFormContainer
              location={ { pathname:this.state.formType} }
              openModal={ this.openModal }
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
