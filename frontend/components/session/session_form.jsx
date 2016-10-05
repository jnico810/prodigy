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
      header = 'Login';
      link = (<p>If you don't have an account, please <a onClick={ this.props.openModal.bind(this, "/signup")}>sign up</a> here!</p>);
    } else if (this.props.formType === '/signup'){
      header = 'SIGN UP';
      link = (<p>If you already have an account, please <a onClick={ this.props.openModal.bind(this, "/login")}>sign up</a> here!</p>);
    }
    if (this.props.errors.length > 0){

      const errorLi = this.props.errors.map((e) => {
        return <li>{ e }</li>;
      });
      errors = <ul> { errorLi } </ul>;
    }

    return(
      <div >
        <h1> { header } </h1>
        { errors }
        <form onSubmit={ this.handleSubmit }>
          <label> Username:
            <input type="text" onChange={ this.handleUpdate("username") }/>
          </label>
          <label> Password:
            <input type="text" onChange={ this.handleUpdate("password") }/>
          </label>
          <input type='submit' />
        </form>
        { link }
      </div>
    );
  }

}

export default SessionForm;
