import {withRouter} from "react-router-dom";
import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar pure-menu pure-menu-horizontal">
      <span><i className="nav-title color-box"></i><a href="/" className="nav-title pure-menu-heading pure-menu-link" onClick={(event) => {
        event.preventDefault();
        props.history.push('/');
      }}>RemitMart</a></span>
      <span>
      <a href="/" className="nav-link" onClick={(event) => {
        event.preventDefault();
        props.history.push('/');
        }}>About us</a></span>
      <span><a href="/d/signup" className="nav-link" onClick={(event) => {
        event.preventDefault();
        props.history.push('/d/signup');
      }}>Donate</a></span>
      <span><a href="/v/signup" className="nav-link" onClick={(event) => {
        event.preventDefault();
      props.history.push('/v/signup');
    }}>Partners</a></span >
      <span><a href="/r/signup" className="nav-link" onClick={(event) => {
        event.preventDefault();
      props.history.push('/r/signup');
    }}>Receive</a></span >
      <a className="userInfo" id="eth-address">
        <i className="fa fa-user fa-fw"></i>
        <span className="userInfo">{props.userName && <span>Hello, {props.userName}</span>}
          {!props.userName &&
        <span>it looks like you don't have Metamask yet, please <a href='/' onClick={(event) => {
          event.preventDefault();
          props.history.push('/')
        }}>SIGNUP</a></span>}</span>
      </a>
    </nav>
  );
};

export default withRouter(Navbar);