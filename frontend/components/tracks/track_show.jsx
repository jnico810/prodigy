import React from 'react';
import { Link } from 'react-router';

class TrackShow extends React.Component{

  constructor(props){
    super(props);
  }
  render(){

    if (this.props.track.title){
      return(<h1>{this.props.track.title}</h1>);
    }else{
      return(<h1>LOADING</h1>);
    }

  }
}


export default TrackShow;
