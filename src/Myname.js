import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Myname extends Component {
  render() {
    if(this.props.hasvacancy) {
      return(
        <div class="sapota">
          Sapota
        </div>
      );
    } else {
      return(
        <div class="honganh">
          Hong Anh
        </div>);
    }
  }
}

export default Myname;
