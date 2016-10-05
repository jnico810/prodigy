import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  handleUpdate(prop) {
    return (e) => (this.setState({[prop]: e.currentTarget.value}));
  }

  componentDidUpdate() {
		if (this.props.loggedIn){
      hashHistory.push("/");
    }
	}

  render(){
    let header, link, errors;
    if (this.props.formType === '/login'){
      header = 'LOGIN';
      link = (<p >Don't have an account? <a onClick={ this.props.openModal.bind(this, "/signup")}>Sign up here.</a></p>);
    } else if (this.props.formType === '/signup'){
      header = 'SIGN UP';
      link = (<p>Already have an account?  <a onClick={ this.props.openModal.bind(this, "/login")}>Sign in here.</a></p>);
    }
    if (this.props.errors.length > 0){

      const errorLi = this.props.errors.map((e) => {
        return <li>{ e }</li>;
      });
      errors = <ul> { errorLi } </ul>;
    }

    return(
      <div className= "modal-content" >
        <button className= "modal-close" onClick={ this.props.closeModal }>X</button>
        <h1 className="modal-header"> { header } </h1>
        { errors }
        <form className="modal-form" onSubmit={ this.handleSubmit }>
          <label> Username</label>
          <input type="text" onChange={ this.handleUpdate("username") }/>
          <label> Password</label>
          <input type="text" onChange={ this.handleUpdate("password") }/>
          <input type='submit' />
        </form>
        { link }
      </div>
    );
  }

}

export default SessionForm;
